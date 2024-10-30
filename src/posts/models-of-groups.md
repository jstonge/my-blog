---
title: Defining group interactions
description: How do we inform our models of groups with what we know about groups.
date: 2024-10-29
categories:
  - phd
  - networks
  - GMEs
  - HONs
published: false
pinned: false
coverImage: uvm_offering.webp
---

<script>
	import ArudaFig2 from '$lib/assets/ArudaFig2.webp';
	import StOngeMesoFig2 from '$lib/assets/StOngeMesoFig2.webp';
</script>


With higher-order networks (HONs), we seek to define the conditions under which group interactions cannot be decomposed into the sum of their pairwise interactions. For instance, WhatsApp group chats, the adoption of new technologies, or publishing papers are cases where dyadic networks fail to capture the dynamics of group phenomena. 

One motivation for the theorization of HONs is to address the pitfalls of projecting higher-order structures onto pairwise interactions. First, projecting can lead to misrepresenting group dynamics; for example, having two close friends pressuring you to get a phone within the same week may have a greater impact than the (linear) sum of their (independent) influences. Second, key information about timing may be lost in the process; for instance, reducing a group’s attempt to reach consensus on a lunch spot might force unknown ordering of interactions during the discussion.

Both examples above treat groups as a **many-body problem**; from a micro-perspective, individual states (such as getting a phone or agreeing on a lunch spot) are influenced in surprising ways by momentary group interactions, as defined by the hyperedge. By momentary, we mean these are examples of group interactions that are well-defined in time, or space. The HONs community has been concerned with contagion processes on higher-order networks, be it social or biological, and whether dynamics are genuinely higher-order and not decomposable into linear models. 

<div class="crop">
  <img alt="ArudaFig2" src={ArudaFig2} />
</div>


This is all well and good. But in this entry we make the following point

<div class="takeHome">Group interactions are not the same than their nonlinear effects in the dynamics. By conflating group interactions with non linear effects, the HONs community restrict its scope to as small subset of group interactions.</div>

We propose a typology to clarify the varied uses of group interactions. 

 - `Reducibility`: can you predict what happens to the group based only on information about its members or do you need extra information about the group itself?
 - `Persistence`: ephemerality of interactions, or reshuffling of group interactions
 - `Isolation`: how much do you need to know about non-members to predict group dynamics?
 - `Alignment`: is the group mind aligned with that of individuals?
 - `Differentiation`: is the group organized in ways that matter for coordination?

We seek to interpret each category in terms of specific network assumptions and related literature. 

For instance, the HONs community mostly focused on `irreducible`, `permanent`, and `isolated` groups. It assumes that higher-order networks are irreducible to their dynamics, in the sense that you need information about hyperedges to determine the outcome of a spread within a group. In HONs, we also typically assume _quenched_ structures, or a frozen topology. That is, the people with whom you repeatedly interact, say in a household or workplace, matters to have an accurate picture of the contagion. And finally, what matters to describe the contagion is restricted to within-group interactions. 

What other group interactions fall outside the scope of this specific set of group-level features? 

## Diversity in group interactions 

We can trivially define a group as a highly clustered networks, or cliques, as it is typically done in pairwise networks. Then, assume that those groups interact somehow; you have set of highly clustered individuals citing each other in a given scientific discipline. Cliques are higher-order structures, regardless of the dynamics. They might not have nonlinear effects within groups, but they are nonetheless "group interactions". 

In this view, higher-order networks rely on an _annealed_ representation, with groups being continuously reshuffled. This approach is favored in part for mathematical convenience, as it facilitates the generalization of analyses from pairwise networks to sets with unrestricted cardinality. 

We propose that group interactions can take other forms. We define a crowd as irreducible and ephemeral group interactions, whereas the aggregate mind is `unaligned` with that of individuals. The crowd can be influenced by a committed minority that have their own agenda. The activation spread is also nonlinear, as a tipping point can be reached when, say, a riot is forming. But it is distinguishable to a group seeking to reach a consensus on a lunch spot. In the riot case, individual members can feel dispossessed of their agency, upon reflection of the riot, while in the lunch members have reached a consensus aligned with their needs.

The persistence of groups allows for more ontologically rich, but philosophically taxing notions of group interactions. We start with the most commonly accepted notions of social ontology; groups with strong social boundaries are shaped by their relationships with neihboring groups. With a quenched structure, we can explore how group interactions coevolved with that of individual states and other groups. 

For instance, consider masking behaviors during a pandemy, with groups being public health department at county-level. Once again we assume that these groups are `persistent`, `irreducible`, but now assume that group themsleves are `interacting` with each other. That is, to know the state of individual of group members you also need to know what is happenning in other groups. Hence, we can frame the contagion as group-level dynamics, beyond the nonlinear effects within groups (shameless plug for [our paper](https://arxiv.org/abs/2310.03672), or this [one](https://corpus.ulaval.ca/server/api/core/bitstreams/98857642-c3b6-4e73-aed6-cc04a33c1eea/content) by another St-Onge). 


<img alt="StOngeMesoFig2" src={StOngeMesoFig2} class="image"/>

To convince yourself, consider how groups are taking action to prevent spread within their members, while being coupled with other groups who seek to do the same. Formally, we track the network state through the states of cliques of arbitrary size, while assuming a mean-field approximation for the influence of other groups on the state of group members. Depending on how, say, the degree to which groups are enforcing masking behaviors, it has a joint influence on within group members, but also global prevalence.


## Is intention all that matters?

We propose a group-centered typology that is informed by various network assumptions, such as quenched or annealed representations. We purport that keeping in mind `persistence`, `reducibility`, `isolation`, `alignment` and `differentiation`, we can better describe the ontology of group interactions. But we think that something is still missing from that description of group interactions. What could it be?

When talking about group minds, or misalignement between individual and groups, we left out a key component of social ontology; that of **(collective) intentionality**. Collective intentionality is the informational layer that bind human networks their own unique ways. It is based on institutional facts and norms of rational inference and truth, that are grounded in the collective practices and blieffs of a social group conceived _generally_ ([Engelmann & Tomasello 2023](https://www.taylorfrancis.com/chapters/edit/10.4324/9781315768571-41/middle-step-joint-intentionality-human-unique-form-second-personal-engagement-jan-engelmann-michael-tomasello)). 

In philosophy, this is sometimes called 'we-intentionality', which is distinct from shared intentionality that occurs in collaborative practices. In this literature, the irreducibility of groups to individuals is an ontological statement. In its strongest form, the argument posits that groups exist independently of individuals; for instance, corporations can lie and be held accountable, above and beyond the actions of corrupt CEOs. When left-handed individuals come together at universities to advocate for adapted furniture, they cross the ontological boundary between aggregates and intentional groups.

As far as I know, very little work has been done on connecting human species-specific modes of cooperation with group-based network structures. Each of the aforementioned categories is influenced by modes of cooperation embedded in our shared perceptions of ourselves and others. 

A few examples come to my mind when thinking about the connection between intentionality and group-based network structures. I dive deeper in those topics in other entries, but consider how kin-based institutions rely on social markers that sharply distinguish in-groups from others and promote deference to elders (CITE HENRICH). These features reduce cultural variability within groups while maintaining intergroup variability. Consequently, one might expect persistent and cohesive groups to emerge, perhaps making quenched structures a better representation of kin-based institutions.

All that to say that group interactions is more than nonlinear effects in the dynamics. We believe that our typology can help better navigate the modeling of groups. A kind of irreducibility can stem from the interaction of structure and dynamics on higer-order networks. 

The much harder question is also how to represent intentionality in those dynamics; perhaps the probability of me getting the new iphone is partly determined by multiple exposures to friends, but also a sense of belonging in that group. 


<!-- ### A tale of two species of chimps

<img alt="GunasekaramFig1" class="image" src={GunasekaramFig1} />
<img alt="HenrichFigP1" class="image" src={HenrichFigP1} />

It is accepted that sociotechnological innovations are influenced by group-structured populations. In the top figure, you can see the levels of interconnectivities between communities of chimps, argued to be influencing the innovation of complex tools and behaviors (here only non-tool behaviors are shown). -->

### Summary

This view departs from most work in epidemiology in that irreducibility of groups stems not from nonlinearities in the dynamics, but in the appromixation of the network state through the states of cliques of arbitrary size.


### Related content

- [Of groups and networks](https://jstonge.vercel.app/why-groups): where we motivate why group-based modeling is fundamentally changing how we represent human social systems.
- [A model of US](https://jstonge.vercel.app/we-networks): where we relate Tomasello's typology of human cooperation to group-based network models.
- [A Natural History of Human Networks](https://jstonge.vercel.app/natural-hist-networks): we flesh out the timeline of human cooperation mode of cooperation in terms of networks.
- [Group-based master equations as many repeated games](https://jstonge.vercel.app/gmes-heart-pgg): where we relate GMEs to repeated games
- [Cultural group selection for group-enthusiast physicists](https://jstonge.vercel.app/cgs): where we introduce the formalism of cultural group selection.


<div class="page-navigation">
  <div class="page-button previous">
    <span class="label">Previous page</span>
    <a href="./why-groups" class="link">Of groups and networks</a>
  </div>
  <div class="page-button next">
    <span class="label">Next page</span>
    <a href="./we-networks" class="link">A model of US</a>
  </div>
</div>

<style>
    .image {
    margin-top: 2rem;
    margin-bottom: 2rem;
    display: flex; 
    justify-content: center; 
    align-items: center;
  }

  
  .crop {
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 550px;
    height: 270px;
    overflow: hidden;
  }


</style>