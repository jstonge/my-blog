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
	import jso2023Fig1 from '$lib/assets/jso2023Fig1.webp';
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

We aim to interpret each category through specific network assumptions and relevant literature. For example, the HONs community tend to focus on groups that are `irreducible`, `permanent`, and `isolated`. This is typically modeled by assuming quenched structures, or a frozen topology. In quenched networks, groups persist over timescales and resist reshuffling. In other words, repeatedly interacting with the same individuals—such as those in a household or workplace—can lead to qualitatively different contagion outcomes than those predicted by averaging over an entire population (i.e., the law of mass action). With isolated groups, we assume that the contagion is largely confined to within-group interactions.

What if group interactions are characterized by `persistent`, `irreducible`,  `interacting` groups. That is, to know the state of individual of group members you also need to know what is happenning in other groups. In [this paper](https://corpus.ulaval.ca/server/api/core/bitstreams/98857642-c3b6-4e73-aed6-cc04a33c1eea/content), the authors show tha group-based approximate master equations with interacting groups can lead to mesoscopic localization

<img alt="StOngeMesoFig2" src={StOngeMesoFig2} class="image"/>

With large enough groups, a disease can become self-sustaning, thereby "smearing" the phase transition. In plain english, even though your group might be doing great, there is a chance that the disease found fertile ground in some other groups, thereby increasing overall transmission probability. Here, the a structure is quenched, but coupling between groups is approximated by mean-field theory. That is, groups interactions are reshuffled, but groups persist over timescales.

## A diversity of group interactions 

We can trivially define groups in highly clustered networks as cliques, as is typically done in pairwise networks. Then, assume that these groups interact in some way; for example, a set of closely connected individuals citing each other within a given scientific discipline, or groups of chimpanzees spread across Africa, with females migrating between groups. Cliques represent higher-order structures regardless of the dynamics. They may lack nonlinear effects within groups, but they still qualify as 'group interactions.'

In this view, higher-order networks relying on annealed representations, where clusters of individuals are continuously reshuffled, may be appropriate. This approach is favored partly for mathematical convenience, but in some cases, it can be accurate. Contagions spreading within isolated, ephemeral groups (as they are reshuffled) may provide a better approximation of the dynamics than assuming no group structure at all. Moreover, it greatly facilitates the generalization of analytical results from pairwise networks to those with unrestricted cardinality.

We can define a crowd as an irreducible and ephemeral group interaction, characterized by an aggregate mindset that is unaligned with that of its individual members. The crowd may be influenced by a committed minority with its own agenda, and the spread of activation can be nonlinear—reaching a tipping point, for instance, when a riot begins to form. This differs from a group seeking to reach a consensus on a lunch spot. In the case of a riot, individuals may later feel they lost a sense of agency, whereas in the lunch scenario, members achieve a consensus that aligns with their individual preferences.

The persistence of groups allows for more ontologically rich, albeit philosophically taxing notions of group interactions. However, we first need to address the missing link in human social interactions.

We start with the most commonly accepted notions of social ontology; groups with strong social boundaries are shaped by their relationships with neihboring groups. With a quenched structure, we can explore how group interactions coevolved with that of individual states and other groups. 

## Is intention all that matters?

So far we have proposed a group-centered typology that is informed by various network assumptions, such as quenched or annealed representations. We believe that keeping in mind `persistence`, `reducibility`, `isolation`, `alignment` and `differentiation`, we can better describe group interactions. But we think that something is still missing from that description of group interactions. What could it be?

When talking about group minds, or misalignement between individual and groups, we left out a key component of social ontology; that of **(collective) intentionality**. Collective intentionality is the informational layer that bind human networks their own unique ways. It is based on institutional facts and norms of rational inference and truth, that are grounded in the collective practices and blieffs of a social group conceived _generally_ ([Engelmann & Tomasello 2023](https://www.taylorfrancis.com/chapters/edit/10.4324/9781315768571-41/middle-step-joint-intentionality-human-unique-form-second-personal-engagement-jan-engelmann-michael-tomasello)). 

In philosophy, this concept is sometimes called 'we-intentionality,' distinct from the shared intentionality that emerges in collaborative practices. In this literature, the irreducibility of groups to individuals is an ontological claim. In its strongest form, this view posits that groups exist independently of individuals; for instance, corporations can lie and be held accountable beyond the actions of corrupt CEOs. When left-handed individuals unite at universities to advocate for adapted furniture, they cross the ontological boundary between mere aggregates and intentional groups.

As far as I know, very little work has been done to connect human species-specific modes of cooperation with group-based network structures. Each of the aforementioned categories is shaped by modes of cooperation embedded in our shared perceptions of ourselves and others.

Consider masking behaviors during a pandemic. When visiting a French café, if open, you are expected to wear a mask to place an order. Collective intentionality underlies this behavior: it is understood that the customer is there to consume a product offered by the employer of the waiter. This scenario is further overlaid by local public health departments enforcing specific policies to reduce infections in the area. The institional reality doesn’t depend on these specific occurrences but rather supra-individual constructions like norms and cultural conventions. As such, groups like French café or public health departments are persistent, irreducible, interacting, and exhibit collective intentionality in enforcing policies among local population (be it sets of customers or local population). From this perspective, contagion is influenced by a group-level dynamic, beyond momentary interactions (shameless plug for [our paper](https://arxiv.org/abs/2310.03672)).

<img alt="jso2023Fig1" src={jso2023Fig1} class="image"/>

Formally, in the above example we track the network state through the states of cliques of arbitrary sizes, while assuming a mean-field approximation for the influence of other groups on the state of group members. Put in other words, the policies of varying strictness are arguably better represented by intentional groups with some frozen structures, with groups interacting with one another in a random-matching fashion. When a collective 'We' chooses to wear a mask, it reflects the coevolution of policies and behaviors. 

Yet, this example remains a poor approximation of collective intentionality. The 'We-' intentionality is absent from this model. A potential approach could be to model the influence of social identity on adherence to policies. Social identity arises from the cultural niches of individuals and is embedded in the symbolic markers and narratives we use to recognize other group members. One might consider the joint influence of this additional informational layer—the strength of social identity—on individual members' willingness to incur personal costs for the benefit of the group.

<!-- A few examples come to my mind when thinking about the connection between intentionality and group-based network structures. I dive deeper in those topics in other entries, but consider how kin-based institutions rely on social markers that sharply distinguish in-groups from others and promote deference to elders (CITE HENRICH). These features reduce cultural variability within groups while maintaining intergroup variability. Consequently, one might expect persistent and cohesive groups to emerge, perhaps making quenched structures a better representation of kin-based institutions.
 -->

All that to say that group interactions is more than nonlinear effects in the dynamics. We believe that our typology can help better navigate the modeling of groups. A kind of irreducibility can stem from the interaction of structure and dynamics on higer-order networks. 

<!-- The much harder question is also how to represent intentionality in those dynamics; perhaps the probability of me getting the new iphone is partly determined by multiple exposures to friends, but also a sense of belonging in that group.  -->

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