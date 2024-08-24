---
title: Allô Montréal
description: Getting to know your city
date: '2024-08-23'
live: https://jstonge.github.io/allo-montreal
source: https://github.com/jstonge/allo-montreal
categories:
  - fun
  - geo
published: true
pinned: false
type: fun
coverImage: mtl.webp
---

<script>
	import mtl from '$lib/assets/allo-mtl.webp';
</script>

This entry is about choroplets and how [Observable Framework](https://observablehq.com/framework/) facilitate streamlining the data pipeline. 

Choroplet maps are fun. People love them. The earliest known choroplet was by [Charles Dupin](https://en.wikipedia.org/wiki/Charles_Dupin) in 1826. He called them "cartes teintées, which I think is a better name. Here is my early prototype of Montreal, with counties tinted by population size:

<img alt="allo-mtl" class="image" src={mtl} />

Are they useful? It depends on how you use them. They represent one variable overlayed on a map. If we understand that variable as a predictor, it will almost always be confounded by other ones. A classic example is that of age-standardized death rates for cancer of kidney/ureter in the US. If you look at both the highest and lowest death rates, you will notice that the maps are extremly similar (see Gelman & Nolan 2009 p.14-15). This is because kidney/ureter cancer deaht rates are confounded by population size of urban centers. 

Anyway, we love choroplet maps. You still can get insights by looking at them. For instance, I never realized how sparsely populated was Outremont in Montreal (dark red in the middle of the city, Outremont includes Joseph-Beaubien, Robert-Bourassa, Jeanne-Sauvé, and Claude-Ryan electoral counties). I guess it make sense, it is an historically rich district. Same with the city of Westmont. 

Now, I want to talk about why [Observable Framework](https://observablehq.com/framework/) is awesome. One issue with dashboard is that they end up rotting.In my experience, one reason why dashboards rot is that we fail to properly document the data pipeline. Following a [principled data pipeline](https://www.youtube.com/watch?v=ZSunU9GQdcI&t=1103s), here data provenance is documented by the scripts themselves. If you look at the [source code](https://github.com/jstonge/allo-montreal/tree/main/src), you will notice there are no data files. The data is loaded at build-time by the data loaders (`metadata.parquet.py` and `mtl_topo.json.py`). Here is the metadata loader script:

```
import sys
import requests
import pandas as pd
import pyarrow as pa
import pyarrow.parquet as pq

fname = "55637C4923B8B03EE0530A930132B03E"
URL = f"http://ville.montreal.qc.ca/pls/portal/url/ITEM/{fname}"
TMPDIR = 'src/.observablehq/cache/metadata.xlsx'

r = requests.get(url=URL,  headers={'User-Agent': 'Mozilla/5.0'})

# write file in cache
with open(TMPDIR, 'wb') as f:
    f.write(r.content)

df = pd.read_excel(TMPDIR, sheet_name="01_Population, Densité", skiprows=2)\
      .iloc[:-4, :]\
      .rename(columns={
        'Unnamed: 0': 'arrondissement', 'Population en 2016': '2016', 'Population en 2011': '2011'
      })

counties2exclude = ['Autres villes', 'Ville de Montréal','AGGLOMÉRATION DE MONTRÉAL']
cols2keep = ['arrondissement', '2016', '2011']
df_long = df.loc[~df.arrondissement.isin(counties2exclude), cols2keep]\
            .assign(
                arrondissement=lambda x: x.arrondissement.str.replace('’', "'")\
                                                         .str.replace('–', '-')
                )\
            .melt(id_vars='arrondissement', var_name='year', value_name='population')

# Borrowed from 
# https://github.com/observablehq/framework/tree/main/examples/loader-python-to-parquet
# Write DataFrame to a temporary file-like object
buf = pa.BufferOutputStream()
table = pa.Table.from_pandas(df_long)
pq.write_table(table, buf, compression="snappy")

# Get the buffer as a bytes object
buf_bytes = buf.getvalue().to_pybytes()

# Write the bytes to standard output
sys.stdout.buffer.write(buf_bytes)
```

It is awesome because we (i) keep using a little bit more python for data wrangling, (ii) we document where the data is coming from by having the links in the script, and (iii) we output as parquet file. As documented [here](https://observablehq.com/framework/loaders#execution), our python environment is specified by a `requirements.txt` file in our root dir (and create with `venv`), that is run before deployment.
  
<style>

  .image {
    margin-top: 2rem;
    margin-bottom: 2rem;
    box-shadow: 0 0 0 0.75px rgba(128, 128, 128, 0.2), 0 6px 12px 6px rgba(0, 0, 0, 0.4);
    border-radius: 8px;
  }
</style>
