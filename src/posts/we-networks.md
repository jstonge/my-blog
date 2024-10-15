---
title: A model of US
description: Modeling interactions with the group
date: 2024-10-14
categories:
  - phd
  - culturalGroupSelection
  - GMEs
published: false
pinned: false
coverImage: cgs-ver-abstract.webp
---

<script>

  import Katex from '$lib/components/Katex.svelte';
  
</script>

In this entry, we relate group-based master equations (GMEs) to Tomasello's taxonomy of human cooperation. 

Tomasello is a psychologist who spent his career studying shared intentionality in humans and great apes. He conducted extensive experimental work on how children, early on, exhibit strong motivation to engage in collaborative tasks. A recurrent theme of his work is how human cognition and biology are shaped by culture. That is, by engaging in shared and collective intentionality, humans were able to ratchet cultural knowledge in a way that is cumulative. Tomasello is widely cited across domains, most notably by philosophers of collective intentionality.

In his review of the [differences in the Social Motivations and Emotions of Humans and Other Great Apes](https://link.springer.com/article/10.1007/s12110-023-09464-0#ref-CR61), Tomasello provides the following table: 
<br>

| Other individuals                                   | In-Group 'WE'                 |
| --------------------------------------------------- | ----------------------------- |
| You > me<br>prosocial sympathy<br>[prosocial helping, communication]     | WE = me<br>in-group identity<br>[conformity, sharing experience]                                                   |
| You = me<br>respectful equality<br>[mutual respect, fairness, deservingness] | WE > me<br>reputation & morality<br>[concern for reputation, enforce social norms, pedagogy, shame, indignation] |
| We > me<br>Normativity<br>[commitment, resentment, and guilt]                | WE > they<br>in-group favoritism<br>[parochial helping & sharing; parochial loyalty, trust, collective guilt]    |

In the first column, Tomasello summarizes pairwise interactions that are key to humans' species-typical motivations for cooperative interactions. He distinguishes those from motivations based on a collective 'WE'. The key point of this entry is simple enough:

<div class="takeHome">GMEs are better suited than simple networks for representing humans' in-group species-typical motivations. At the risk of stating the obvious, group-based models are better at capturing irreducible group-based social dynamics, which lie at the heart of humans' ability to ratchet cultural knowledge. Recognizing that cultural behaviors are shaped by a collective 'WE' allows us to better reintegrate individual variations in agency, beliefs, and rationality.</div>

Tomasello did amazing work on how humans differ from other great apes in their modes of cooperation. From a network perspective, intentionality types ought to drive edge formation; you helping me in a dominance contest with or without shared intententionality lead to different order of interactions. By linking Tomasello's work to GMEs, we highlight the primacy of group-based models for studying humans.

#### Others and me

In a social hierarchy, we might be interested in 'You > me' interactions. These are dyadic interactions in that they are repeated interactions among individuals that specify the (latent) ranking of a network. This latent rank influences correlations in interactions; individuals of similar ranking tend to interact more often than not. 

Chimps might help each other form alliances to better navigate the social hierarchy. Humans do the same. However, humans' calculus of cooperation is more involved. In addition to direct dyadic interactions, humans (even children) are motivated by others in the group receiving help, no matter what (third-party interactions). To illustrate that point, Tomasello mentions a study where children felt compelled not only when helping each other ('You > me') but also when a third party helped a group member. In human dominance contests, we might expect broader variations the number of involved individuals as it'll depeend on group-level social norms.

<p>Another way to put it is in terms of dynamical correlation among the state of the nodes. In pairwise dominance contests, we have that <Katex math={"A_{i\\rightarrow j}"} /> with animal <em>i</em> beating up <em>j</em> a number of times. In the most fancy model I know, we get that each fight (edge) is independent of other pairs of fights, conditioned on the ranks (CITE De Bacco, Larremore & Moore). Keeping the argument hand-wavy, we can say that the state of the nodes is uncorrelated, thus neglecting dynamical correlation among them; the dominance dynamics remain pairwise (your rank doesn't depend on the state of your neighbor, only on who you decide to pick a fight with). </p>

<p>Grounding Tomasello's ideas within approximate master equation formalism, we could say that human social dominance depends not only on the state of a node but also on the state of the node's neighbors. We might envision a model that looks like <Katex math={"R_{k,\\ell}(t)"} /> where it is the joint probability that a node occupies the rank <em>R</em>, has <em>k</em> friends, and <Katex math={"\\ell \\leq k"} /> friends with higher ranking than the node itself. As such, your ranking could be proportional to the fraction of your friends in your groups with high-ranking status. But we leave that model for future work.</p>

When comparing humans with our closest relatives, it becomes clear that human motivations are often higher-order; even in dyadic interactions, it might pay off to consider a third-party member ('We > me'). Even though this is the case, we are still talking about the first column. Why?

The answer has to do with the social ontology. With higher-order networks, we often have in mind the impact of momentarily many-body interactions on the dynamics of the networks. For instance, the probability of transmission might be different with many contagious individuals infecting me simultaneously than decomposing the sum of pairwise interactions.

The second column is where group stuff gets real.

#### This is how WE do things here

Drawing from philosophers such as John Searle, Tomasello shows in his experimental work how humans are uniquely characterized by a 'WE' intentionality that is embodied in our social markers and cultural conventions (e.g., food preparation, language, and all sorts of know-how). According to him, this we-intentionality, building on top of shared intentionality, emerged due to group-level dynamics, such as intergroup competition, that are thought to have taken root in the Pleistocene (CITE BOYD).

This in-group 'WE' can be modeled as a clique, or a set of fully connected individuals. Think of households, tribes, or classrooms—settings where individual behavior aligns with group dynamics. Many well-known psychological mechanisms are known to promote in-group cohesion. In contrast to 'We > me', the institutional reality tied to those groups (loosely defined) goes beyond the momentarily interactions; those groups are cultural in that the social facts that belong to the groups evolve over time. 

<!-- <div class="margin">
  <SimpleGME />
</div> -->

A telling example comes from experiments with children, where they are told they belong to a group based on something as simple as wearing the same color t-shirt and hat. Despite this somewhat arbitrary marker, children often prefer to stay loyal to their group, even if it means losing a game. In-group favoritism is known to be an integral part of kin-based psychology.

In the case of 'WE > me', humans can be thought of as policing others' behaviors in the name of the group. Once again, we can think of a clique, but now the 'Group' can take actions, or implement policies, that can evolve in time to suppress undesirable individual behaviors. Organizational scientists call that institutionalization process.

For example, children as young as three are highly motivated to enforce social norms. They eagerly demonstrate to their peers "how things are done", even when the norm in question is entirely made up, and they were not directly involved in the interactions. When asked why they do it, children justify their actions not by personal preference but by appealing to a collective sense of 'WE.' This behavior is not exclusive to children—adults exhibit it as well.

We could model policing from a pairwise perspective. Say we want to model the spread of composting behaviors across counties. As with children, assume that adults seek to pressure each other via shaming and guilt. One way to do that would be with agent-based models, where individuals adopt others' behavior as some function of their neighbors exhibiting that behavior. To make it more sophisticated, assume that adoption is a nonlinear function with some thresholds varying across individuals, depending on multiple sources of exposure.

However, this approach makes it harder to analyze the influence of group-level behaviors, such as policing or reputation management. Instead of thinking about individuals implementing policing on their own, we can coarse-grain at the level of groups. As such, we only need to keep track of how groups, or cliques, adopt different levels of policies. We lose the details of individual agents, but based on the assumption that individuals are strongly influenced by their loyalty to the group or collective guilt, as Tomasello demonstrates, we get a 'simpler' model than adopting the agent-based point of view.

Taken to the limit, we can model individuals as subservient to the group, where the group's costs and benefits are those of its members. By setting aside the individuals, we can explore how group-level traits are transmitted across groups, impacting group formation and disintegration.

Using GMEs where agents are fully determined by the group, we mirror what Tomasello does in his article; we are proposing that it is useful to put the groups before individuals in the modern study of social networks. Even though we might feel that individuals are the center of societies, Tomasello (with others) make a convincing case that this is wrong. Our network theories should follow that lead.

#### Wake up sheeple

In his conclusion, Tomasello puts individuals back into the picture; of course, people are not fully determined by the group. People must balance their own needs and desires with those of the group, whatever these might be today. Once we have established group-based structural properties to represent social networks, we can reintroduce agents with rationality and desires.

For instance, we can design our model so that individuals might agree with the level of policing present in their group. By reintegrating group-based rationality, we can study other key social processes such as governance and consensus-making, within-group opinion polarization, or the spread of sociotechnical innovations. We do not go back to the ways were before. Human rationality must be informed by more accurate structural properties that describe the peculiarities of human social systems.

<style>

  .margin {
    font-size: 12px;
    width: 300px;  
    float: right;  
    margin-left: 20px; 
    margin-right: -300px;
    position: relative;
}

@media (max-width: 768px) {
  .margin {
    float: none;
    margin: 0 auto; 
    padding-bottom: 5px;  
  }
}

</style>