/**
 * This file was automatically generated by nexus-prisma@0.3.5
 * Do not make changes to this file directly
 */

import { core } from 'nexus'
import { GraphQLResolveInfo } from 'graphql'
import * as prisma from '../prisma-client'

declare global {
  interface NexusPrismaGen extends NexusPrismaTypes {}
}

export interface NexusPrismaTypes {
  objectTypes: {
    fields: {
      Query: QueryObject
      Owcharacter: OwcharacterObject
      OwcharacterConnection: OwcharacterConnectionObject
      PageInfo: PageInfoObject
      OwcharacterEdge: OwcharacterEdgeObject
      AggregateOwcharacter: AggregateOwcharacterObject
      Mutation: MutationObject
      BatchPayload: BatchPayloadObject
      Subscription: SubscriptionObject
      OwcharacterSubscriptionPayload: OwcharacterSubscriptionPayloadObject
      OwcharacterPreviousValues: OwcharacterPreviousValuesObject
    }
    fieldsDetails: {
      Query: QueryFieldDetails
      Owcharacter: OwcharacterFieldDetails
      OwcharacterConnection: OwcharacterConnectionFieldDetails
      PageInfo: PageInfoFieldDetails
      OwcharacterEdge: OwcharacterEdgeFieldDetails
      AggregateOwcharacter: AggregateOwcharacterFieldDetails
      Mutation: MutationFieldDetails
      BatchPayload: BatchPayloadFieldDetails
      Subscription: SubscriptionFieldDetails
      OwcharacterSubscriptionPayload: OwcharacterSubscriptionPayloadFieldDetails
      OwcharacterPreviousValues: OwcharacterPreviousValuesFieldDetails
    }
  }
  inputTypes: {
    fields: {
      OwcharacterWhereUniqueInput: OwcharacterWhereUniqueInputInputObject
      OwcharacterWhereInput: OwcharacterWhereInputInputObject
      OwcharacterCreateInput: OwcharacterCreateInputInputObject
      OwcharacterUpdateInput: OwcharacterUpdateInputInputObject
      OwcharacterUpdateManyMutationInput: OwcharacterUpdateManyMutationInputInputObject
      OwcharacterSubscriptionWhereInput: OwcharacterSubscriptionWhereInputInputObject
    }
  }
  enumTypes: {
    OwcharacterOrderByInput: OwcharacterOrderByInputValues,
    MutationType: MutationTypeValues,
  }
}

// Types for Query

type QueryObject =
  | QueryFields
  | { name: 'owcharacter', args?: QueryOwcharacterArgs[] | false, alias?: string  } 
  | { name: 'owcharacters', args?: QueryOwcharactersArgs[] | false, alias?: string  } 
  | { name: 'owcharactersConnection', args?: QueryOwcharactersConnectionArgs[] | false, alias?: string  } 

type QueryFields =
  | 'owcharacter'
  | 'owcharacters'
  | 'owcharactersConnection'


type QueryOwcharacterArgs =
  | 'where'
type QueryOwcharactersArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryOwcharactersConnectionArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
  

export interface QueryFieldDetails {
  owcharacter: {
    type: 'Owcharacter'
    args: Record<QueryOwcharacterArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Query">,
      args: { where: OwcharacterWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Owcharacter | null> | prisma.Owcharacter | null
  }
  owcharacters: {
    type: 'Owcharacter'
    args: Record<QueryOwcharactersArgs, core.NexusArgDef<string>>
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: OwcharacterWhereInput | null, orderBy?: prisma.OwcharacterOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Owcharacter[]> | prisma.Owcharacter[]
  }
  owcharactersConnection: {
    type: 'OwcharacterConnection'
    args: Record<QueryOwcharactersConnectionArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: OwcharacterWhereInput | null, orderBy?: prisma.OwcharacterOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.OwcharacterConnection> | prisma.OwcharacterConnection
  }
}
  

// Types for Owcharacter

type OwcharacterObject =
  | OwcharacterFields
  | { name: '_id', args?: [] | false, alias?: string  } 
  | { name: 'class', args?: [] | false, alias?: string  } 
  | { name: 'imageUrl', args?: [] | false, alias?: string  } 
  | { name: 'name', args?: [] | false, alias?: string  } 
  | { name: 'quote', args?: [] | false, alias?: string  } 
  | { name: 'ultimate', args?: [] | false, alias?: string  } 
  | { name: 'weapon', args?: [] | false, alias?: string  } 

type OwcharacterFields =
  | '_id'
  | 'class'
  | 'imageUrl'
  | 'name'
  | 'quote'
  | 'ultimate'
  | 'weapon'



  

export interface OwcharacterFieldDetails {
  _id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  class: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  imageUrl: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  name: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  quote: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  ultimate: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  weapon: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
}
  

// Types for OwcharacterConnection

type OwcharacterConnectionObject =
  | OwcharacterConnectionFields
  | { name: 'pageInfo', args?: [] | false, alias?: string  } 
  | { name: 'edges', args?: [] | false, alias?: string  } 
  | { name: 'aggregate', args?: [] | false, alias?: string  } 

type OwcharacterConnectionFields =
  | 'pageInfo'
  | 'edges'
  | 'aggregate'



  

export interface OwcharacterConnectionFieldDetails {
  pageInfo: {
    type: 'PageInfo'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"OwcharacterConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PageInfo> | prisma.PageInfo
  }
  edges: {
    type: 'OwcharacterEdge'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"OwcharacterConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.OwcharacterEdge[]> | prisma.OwcharacterEdge[]
  }
  aggregate: {
    type: 'AggregateOwcharacter'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"OwcharacterConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AggregateOwcharacter> | prisma.AggregateOwcharacter
  }
}
  

// Types for PageInfo

type PageInfoObject =
  | PageInfoFields
  | { name: 'hasNextPage', args?: [] | false, alias?: string  } 
  | { name: 'hasPreviousPage', args?: [] | false, alias?: string  } 
  | { name: 'startCursor', args?: [] | false, alias?: string  } 
  | { name: 'endCursor', args?: [] | false, alias?: string  } 

type PageInfoFields =
  | 'hasNextPage'
  | 'hasPreviousPage'
  | 'startCursor'
  | 'endCursor'



  

export interface PageInfoFieldDetails {
  hasNextPage: {
    type: 'Boolean'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  hasPreviousPage: {
    type: 'Boolean'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  startCursor: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  endCursor: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
}
  

// Types for OwcharacterEdge

type OwcharacterEdgeObject =
  | OwcharacterEdgeFields
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'cursor', args?: [] | false, alias?: string  } 

type OwcharacterEdgeFields =
  | 'node'
  | 'cursor'



  

export interface OwcharacterEdgeFieldDetails {
  node: {
    type: 'Owcharacter'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"OwcharacterEdge">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Owcharacter> | prisma.Owcharacter
  }
  cursor: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for AggregateOwcharacter

type AggregateOwcharacterObject =
  | AggregateOwcharacterFields
  | { name: 'count', args?: [] | false, alias?: string  } 

type AggregateOwcharacterFields =
  | 'count'



  

export interface AggregateOwcharacterFieldDetails {
  count: {
    type: 'Int'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for Mutation

type MutationObject =
  | MutationFields
  | { name: 'createOwcharacter', args?: MutationCreateOwcharacterArgs[] | false, alias?: string  } 
  | { name: 'updateOwcharacter', args?: MutationUpdateOwcharacterArgs[] | false, alias?: string  } 
  | { name: 'updateManyOwcharacters', args?: MutationUpdateManyOwcharactersArgs[] | false, alias?: string  } 
  | { name: 'upsertOwcharacter', args?: MutationUpsertOwcharacterArgs[] | false, alias?: string  } 
  | { name: 'deleteOwcharacter', args?: MutationDeleteOwcharacterArgs[] | false, alias?: string  } 
  | { name: 'deleteManyOwcharacters', args?: MutationDeleteManyOwcharactersArgs[] | false, alias?: string  } 

type MutationFields =
  | 'createOwcharacter'
  | 'updateOwcharacter'
  | 'updateManyOwcharacters'
  | 'upsertOwcharacter'
  | 'deleteOwcharacter'
  | 'deleteManyOwcharacters'


type MutationCreateOwcharacterArgs =
  | 'data'
type MutationUpdateOwcharacterArgs =
  | 'data'
  | 'where'
type MutationUpdateManyOwcharactersArgs =
  | 'data'
  | 'where'
type MutationUpsertOwcharacterArgs =
  | 'where'
  | 'create'
  | 'update'
type MutationDeleteOwcharacterArgs =
  | 'where'
type MutationDeleteManyOwcharactersArgs =
  | 'where'
  

export interface MutationFieldDetails {
  createOwcharacter: {
    type: 'Owcharacter'
    args: Record<MutationCreateOwcharacterArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: OwcharacterCreateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Owcharacter> | prisma.Owcharacter
  }
  updateOwcharacter: {
    type: 'Owcharacter'
    args: Record<MutationUpdateOwcharacterArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: OwcharacterUpdateInput, where: OwcharacterWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Owcharacter | null> | prisma.Owcharacter | null
  }
  updateManyOwcharacters: {
    type: 'BatchPayload'
    args: Record<MutationUpdateManyOwcharactersArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: OwcharacterUpdateManyMutationInput, where?: OwcharacterWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
  upsertOwcharacter: {
    type: 'Owcharacter'
    args: Record<MutationUpsertOwcharacterArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: OwcharacterWhereUniqueInput, create: OwcharacterCreateInput, update: OwcharacterUpdateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Owcharacter> | prisma.Owcharacter
  }
  deleteOwcharacter: {
    type: 'Owcharacter'
    args: Record<MutationDeleteOwcharacterArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: OwcharacterWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Owcharacter | null> | prisma.Owcharacter | null
  }
  deleteManyOwcharacters: {
    type: 'BatchPayload'
    args: Record<MutationDeleteManyOwcharactersArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where?: OwcharacterWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
}
  

// Types for BatchPayload

type BatchPayloadObject =
  | BatchPayloadFields
  | { name: 'count', args?: [] | false, alias?: string  } 

type BatchPayloadFields =
  | 'count'



  

export interface BatchPayloadFieldDetails {
  count: {
    type: 'Long'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for Subscription

type SubscriptionObject =
  | SubscriptionFields
  | { name: 'owcharacter', args?: SubscriptionOwcharacterArgs[] | false, alias?: string  } 

type SubscriptionFields =
  | 'owcharacter'


type SubscriptionOwcharacterArgs =
  | 'where'
  

export interface SubscriptionFieldDetails {
  owcharacter: {
    type: 'OwcharacterSubscriptionPayload'
    args: Record<SubscriptionOwcharacterArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Subscription">,
      args: { where?: OwcharacterSubscriptionWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.OwcharacterSubscriptionPayload | null> | prisma.OwcharacterSubscriptionPayload | null
  }
}
  

// Types for OwcharacterSubscriptionPayload

type OwcharacterSubscriptionPayloadObject =
  | OwcharacterSubscriptionPayloadFields
  | { name: 'mutation', args?: [] | false, alias?: string  } 
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'updatedFields', args?: [] | false, alias?: string  } 
  | { name: 'previousValues', args?: [] | false, alias?: string  } 

type OwcharacterSubscriptionPayloadFields =
  | 'mutation'
  | 'node'
  | 'updatedFields'
  | 'previousValues'



  

export interface OwcharacterSubscriptionPayloadFieldDetails {
  mutation: {
    type: 'MutationType'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"OwcharacterSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.MutationType> | prisma.MutationType
  }
  node: {
    type: 'Owcharacter'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"OwcharacterSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Owcharacter | null> | prisma.Owcharacter | null
  }
  updatedFields: {
    type: 'String'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: undefined
  }
  previousValues: {
    type: 'OwcharacterPreviousValues'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"OwcharacterSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.OwcharacterPreviousValues | null> | prisma.OwcharacterPreviousValues | null
  }
}
  

// Types for OwcharacterPreviousValues

type OwcharacterPreviousValuesObject =
  | OwcharacterPreviousValuesFields
  | { name: '_id', args?: [] | false, alias?: string  } 
  | { name: 'class', args?: [] | false, alias?: string  } 
  | { name: 'imageUrl', args?: [] | false, alias?: string  } 
  | { name: 'name', args?: [] | false, alias?: string  } 
  | { name: 'quote', args?: [] | false, alias?: string  } 
  | { name: 'ultimate', args?: [] | false, alias?: string  } 
  | { name: 'weapon', args?: [] | false, alias?: string  } 

type OwcharacterPreviousValuesFields =
  | '_id'
  | 'class'
  | 'imageUrl'
  | 'name'
  | 'quote'
  | 'ultimate'
  | 'weapon'



  

export interface OwcharacterPreviousValuesFieldDetails {
  _id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  class: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  imageUrl: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  name: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  quote: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  ultimate: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  weapon: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
}
  


export interface OwcharacterWhereUniqueInput {
  _id?: string | null
}
export type OwcharacterWhereUniqueInputInputObject =
  | Extract<keyof OwcharacterWhereUniqueInput, string>
  | { name: '_id', alias?: string  } 
  
export interface OwcharacterWhereInput {
  _id?: string | null
  _id_not?: string | null
  _id_in?: string[]
  _id_not_in?: string[]
  _id_lt?: string | null
  _id_lte?: string | null
  _id_gt?: string | null
  _id_gte?: string | null
  _id_contains?: string | null
  _id_not_contains?: string | null
  _id_starts_with?: string | null
  _id_not_starts_with?: string | null
  _id_ends_with?: string | null
  _id_not_ends_with?: string | null
  class?: string | null
  class_not?: string | null
  class_in?: string[]
  class_not_in?: string[]
  class_lt?: string | null
  class_lte?: string | null
  class_gt?: string | null
  class_gte?: string | null
  class_contains?: string | null
  class_not_contains?: string | null
  class_starts_with?: string | null
  class_not_starts_with?: string | null
  class_ends_with?: string | null
  class_not_ends_with?: string | null
  imageUrl?: string | null
  imageUrl_not?: string | null
  imageUrl_in?: string[]
  imageUrl_not_in?: string[]
  imageUrl_lt?: string | null
  imageUrl_lte?: string | null
  imageUrl_gt?: string | null
  imageUrl_gte?: string | null
  imageUrl_contains?: string | null
  imageUrl_not_contains?: string | null
  imageUrl_starts_with?: string | null
  imageUrl_not_starts_with?: string | null
  imageUrl_ends_with?: string | null
  imageUrl_not_ends_with?: string | null
  name?: string | null
  name_not?: string | null
  name_in?: string[]
  name_not_in?: string[]
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  quote?: string | null
  quote_not?: string | null
  quote_in?: string[]
  quote_not_in?: string[]
  quote_lt?: string | null
  quote_lte?: string | null
  quote_gt?: string | null
  quote_gte?: string | null
  quote_contains?: string | null
  quote_not_contains?: string | null
  quote_starts_with?: string | null
  quote_not_starts_with?: string | null
  quote_ends_with?: string | null
  quote_not_ends_with?: string | null
  ultimate?: string | null
  ultimate_not?: string | null
  ultimate_in?: string[]
  ultimate_not_in?: string[]
  ultimate_lt?: string | null
  ultimate_lte?: string | null
  ultimate_gt?: string | null
  ultimate_gte?: string | null
  ultimate_contains?: string | null
  ultimate_not_contains?: string | null
  ultimate_starts_with?: string | null
  ultimate_not_starts_with?: string | null
  ultimate_ends_with?: string | null
  ultimate_not_ends_with?: string | null
  weapon?: string | null
  weapon_not?: string | null
  weapon_in?: string[]
  weapon_not_in?: string[]
  weapon_lt?: string | null
  weapon_lte?: string | null
  weapon_gt?: string | null
  weapon_gte?: string | null
  weapon_contains?: string | null
  weapon_not_contains?: string | null
  weapon_starts_with?: string | null
  weapon_not_starts_with?: string | null
  weapon_ends_with?: string | null
  weapon_not_ends_with?: string | null
  AND?: OwcharacterWhereInput[]
}
export type OwcharacterWhereInputInputObject =
  | Extract<keyof OwcharacterWhereInput, string>
  | { name: '_id', alias?: string  } 
  | { name: '_id_not', alias?: string  } 
  | { name: '_id_in', alias?: string  } 
  | { name: '_id_not_in', alias?: string  } 
  | { name: '_id_lt', alias?: string  } 
  | { name: '_id_lte', alias?: string  } 
  | { name: '_id_gt', alias?: string  } 
  | { name: '_id_gte', alias?: string  } 
  | { name: '_id_contains', alias?: string  } 
  | { name: '_id_not_contains', alias?: string  } 
  | { name: '_id_starts_with', alias?: string  } 
  | { name: '_id_not_starts_with', alias?: string  } 
  | { name: '_id_ends_with', alias?: string  } 
  | { name: '_id_not_ends_with', alias?: string  } 
  | { name: 'class', alias?: string  } 
  | { name: 'class_not', alias?: string  } 
  | { name: 'class_in', alias?: string  } 
  | { name: 'class_not_in', alias?: string  } 
  | { name: 'class_lt', alias?: string  } 
  | { name: 'class_lte', alias?: string  } 
  | { name: 'class_gt', alias?: string  } 
  | { name: 'class_gte', alias?: string  } 
  | { name: 'class_contains', alias?: string  } 
  | { name: 'class_not_contains', alias?: string  } 
  | { name: 'class_starts_with', alias?: string  } 
  | { name: 'class_not_starts_with', alias?: string  } 
  | { name: 'class_ends_with', alias?: string  } 
  | { name: 'class_not_ends_with', alias?: string  } 
  | { name: 'imageUrl', alias?: string  } 
  | { name: 'imageUrl_not', alias?: string  } 
  | { name: 'imageUrl_in', alias?: string  } 
  | { name: 'imageUrl_not_in', alias?: string  } 
  | { name: 'imageUrl_lt', alias?: string  } 
  | { name: 'imageUrl_lte', alias?: string  } 
  | { name: 'imageUrl_gt', alias?: string  } 
  | { name: 'imageUrl_gte', alias?: string  } 
  | { name: 'imageUrl_contains', alias?: string  } 
  | { name: 'imageUrl_not_contains', alias?: string  } 
  | { name: 'imageUrl_starts_with', alias?: string  } 
  | { name: 'imageUrl_not_starts_with', alias?: string  } 
  | { name: 'imageUrl_ends_with', alias?: string  } 
  | { name: 'imageUrl_not_ends_with', alias?: string  } 
  | { name: 'name', alias?: string  } 
  | { name: 'name_not', alias?: string  } 
  | { name: 'name_in', alias?: string  } 
  | { name: 'name_not_in', alias?: string  } 
  | { name: 'name_lt', alias?: string  } 
  | { name: 'name_lte', alias?: string  } 
  | { name: 'name_gt', alias?: string  } 
  | { name: 'name_gte', alias?: string  } 
  | { name: 'name_contains', alias?: string  } 
  | { name: 'name_not_contains', alias?: string  } 
  | { name: 'name_starts_with', alias?: string  } 
  | { name: 'name_not_starts_with', alias?: string  } 
  | { name: 'name_ends_with', alias?: string  } 
  | { name: 'name_not_ends_with', alias?: string  } 
  | { name: 'quote', alias?: string  } 
  | { name: 'quote_not', alias?: string  } 
  | { name: 'quote_in', alias?: string  } 
  | { name: 'quote_not_in', alias?: string  } 
  | { name: 'quote_lt', alias?: string  } 
  | { name: 'quote_lte', alias?: string  } 
  | { name: 'quote_gt', alias?: string  } 
  | { name: 'quote_gte', alias?: string  } 
  | { name: 'quote_contains', alias?: string  } 
  | { name: 'quote_not_contains', alias?: string  } 
  | { name: 'quote_starts_with', alias?: string  } 
  | { name: 'quote_not_starts_with', alias?: string  } 
  | { name: 'quote_ends_with', alias?: string  } 
  | { name: 'quote_not_ends_with', alias?: string  } 
  | { name: 'ultimate', alias?: string  } 
  | { name: 'ultimate_not', alias?: string  } 
  | { name: 'ultimate_in', alias?: string  } 
  | { name: 'ultimate_not_in', alias?: string  } 
  | { name: 'ultimate_lt', alias?: string  } 
  | { name: 'ultimate_lte', alias?: string  } 
  | { name: 'ultimate_gt', alias?: string  } 
  | { name: 'ultimate_gte', alias?: string  } 
  | { name: 'ultimate_contains', alias?: string  } 
  | { name: 'ultimate_not_contains', alias?: string  } 
  | { name: 'ultimate_starts_with', alias?: string  } 
  | { name: 'ultimate_not_starts_with', alias?: string  } 
  | { name: 'ultimate_ends_with', alias?: string  } 
  | { name: 'ultimate_not_ends_with', alias?: string  } 
  | { name: 'weapon', alias?: string  } 
  | { name: 'weapon_not', alias?: string  } 
  | { name: 'weapon_in', alias?: string  } 
  | { name: 'weapon_not_in', alias?: string  } 
  | { name: 'weapon_lt', alias?: string  } 
  | { name: 'weapon_lte', alias?: string  } 
  | { name: 'weapon_gt', alias?: string  } 
  | { name: 'weapon_gte', alias?: string  } 
  | { name: 'weapon_contains', alias?: string  } 
  | { name: 'weapon_not_contains', alias?: string  } 
  | { name: 'weapon_starts_with', alias?: string  } 
  | { name: 'weapon_not_starts_with', alias?: string  } 
  | { name: 'weapon_ends_with', alias?: string  } 
  | { name: 'weapon_not_ends_with', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  
export interface OwcharacterCreateInput {
  class?: string | null
  imageUrl?: string | null
  name?: string | null
  quote?: string | null
  ultimate?: string | null
  weapon?: string | null
}
export type OwcharacterCreateInputInputObject =
  | Extract<keyof OwcharacterCreateInput, string>
  | { name: 'class', alias?: string  } 
  | { name: 'imageUrl', alias?: string  } 
  | { name: 'name', alias?: string  } 
  | { name: 'quote', alias?: string  } 
  | { name: 'ultimate', alias?: string  } 
  | { name: 'weapon', alias?: string  } 
  
export interface OwcharacterUpdateInput {
  class?: string | null
  imageUrl?: string | null
  name?: string | null
  quote?: string | null
  ultimate?: string | null
  weapon?: string | null
}
export type OwcharacterUpdateInputInputObject =
  | Extract<keyof OwcharacterUpdateInput, string>
  | { name: 'class', alias?: string  } 
  | { name: 'imageUrl', alias?: string  } 
  | { name: 'name', alias?: string  } 
  | { name: 'quote', alias?: string  } 
  | { name: 'ultimate', alias?: string  } 
  | { name: 'weapon', alias?: string  } 
  
export interface OwcharacterUpdateManyMutationInput {
  class?: string | null
  imageUrl?: string | null
  name?: string | null
  quote?: string | null
  ultimate?: string | null
  weapon?: string | null
}
export type OwcharacterUpdateManyMutationInputInputObject =
  | Extract<keyof OwcharacterUpdateManyMutationInput, string>
  | { name: 'class', alias?: string  } 
  | { name: 'imageUrl', alias?: string  } 
  | { name: 'name', alias?: string  } 
  | { name: 'quote', alias?: string  } 
  | { name: 'ultimate', alias?: string  } 
  | { name: 'weapon', alias?: string  } 
  
export interface OwcharacterSubscriptionWhereInput {
  mutation_in?: prisma.MutationType[]
  updatedFields_contains?: string | null
  updatedFields_contains_every?: string[]
  updatedFields_contains_some?: string[]
  node?: OwcharacterWhereInput | null
  AND?: OwcharacterSubscriptionWhereInput[]
}
export type OwcharacterSubscriptionWhereInputInputObject =
  | Extract<keyof OwcharacterSubscriptionWhereInput, string>
  | { name: 'mutation_in', alias?: string  } 
  | { name: 'updatedFields_contains', alias?: string  } 
  | { name: 'updatedFields_contains_every', alias?: string  } 
  | { name: 'updatedFields_contains_some', alias?: string  } 
  | { name: 'node', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  

export type OwcharacterOrderByInputValues =
  | '_id_ASC'
  | '_id_DESC'
  | 'class_ASC'
  | 'class_DESC'
  | 'imageUrl_ASC'
  | 'imageUrl_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'quote_ASC'
  | 'quote_DESC'
  | 'ultimate_ASC'
  | 'ultimate_DESC'
  | 'weapon_ASC'
  | 'weapon_DESC'
  
export type MutationTypeValues =
  | 'CREATED'
  | 'UPDATED'
  | 'DELETED'
  
  