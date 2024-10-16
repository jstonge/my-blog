---
title: Soul searching
description: How do we convert simple mechanistic models into approximate master equations
date: 2024-10-14
categories:
  - phd
  - GMEs
published: false
pinned: false
coverImage: cgs-ver-abstract.webp
---

<script>

  import Katex from '$lib/components/Katex.svelte';
  
</script>


### Known phenomena with master equations:

#### Contagion 
 
  - Binary states (S, I). 
  - Probability of infection S->I proportional to the number of S people in the group. Recall, here we are modeling probability flow, aka probability of moving from a group with states (6S, 2I) -> (7S, 1I), which can depend both on people within group and across groups. The evolution dynamics is that of people getting sick, that is, how much of the population transition from S -> I. 
 
#### Altruism
  - Exact same than contagion, but we assume Binary state to be (Altruism, Selfish). 
  - Altruism being costly to individuals, but benefitial at the group level. Groups with more altruism ought to do better than selfish groups. SIS dynamics where people can stay altruistic, or revert back to be selfish. Here, we are interested in the final equilibrum state of altruistic and selfish people. There is a dance between the group imposing altruism, and selfish individual tendencies. 
 
#### Lotka-volterra
  
  - Binary populations (either Prey or Predator). 
  - Here this is a model of population death and growth. "Prey are converted into Predators" via predation, much like Suceptible people are converted into Infected individuals. 
 
 
### Unknown master equations

#### Social dominance

  - <p>Binary population might be Hawk (Benefactors) or Dove (Supported). Here the trick is to, like the altruism case, to stop thinking about the nodes themselves. Again, say that we have more than 2 villages; we have a 1000. Each village is composed of a number of Hawk and Dove. Hawk and Dove are influenced by the level of religiosity in the village. So, by analogy to source sink, we have <Katex math={ "C_{n,l}"}/>, where <em>n</em> is the fraction of Hawks in groups with religiosity level <em>l</em>. A village can move left and right (their number of Hawk and Dove), which is dependent on the level of religiosity. It is about the probability of moving from a state of, say, (600Hawk, 3 Dove) to (599Hawk, 4 Dove). </p>
  - *Where is the ranking?* In the original setup, we end up with social ranking in terms of social capital; people with more social capital are more often asked for help. As such, you end up with a relationship of between person worshipping regularly or undertaking costlier public religious acts (level of religiosity), and being a benefactor (Hawk).
  - *In group-based models*, we ask a slightly different question; assume that the probability of having more or less Hawks in a village depends on the state of the nodes and the state around the node, aka the fraction of benefactor around you.
   - In both cases, we are interested in how 

#### Institutional Prestige

  - Binary population might be Prestigious/High ranking and Not-Prestigious/Low ranking. Questions might be about why do we always end up with long-tail distributions, with few high-ranking individuals dominating the rest.  That is, in our system it is hard to move away from having more than, say, 8% of prestigious institutios (8 Prestigious, 100 Non-Prestigious). 
  - **Where is the ranking?** In the original setup, we end up with individuals ranks; prestigious institutions are those who can more easily place their students into other institutions.
  
### Don't forget to answer the questions

- _What is the set of discrete states available to the system?_
- _What are the possible transitions between states?_
- _At what rates do these transitions occur?_
