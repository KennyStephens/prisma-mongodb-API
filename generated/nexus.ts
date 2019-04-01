/**
 * This file was automatically generated by Nexus 0.11.6
 * Do not make changes to this file directly
 */




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  OwcharacterCreateInput: { // input type
    class?: string | null; // String
    imageUrl?: string | null; // String
    name?: string | null; // String
    quote?: string | null; // String
    ultimate?: string | null; // String
    weapon?: string | null; // String
  }
  OwcharacterUpdateInput: { // input type
    class?: string | null; // String
    imageUrl?: string | null; // String
    name?: string | null; // String
    quote?: string | null; // String
    ultimate?: string | null; // String
    weapon?: string | null; // String
  }
  OwcharacterUpdateManyMutationInput: { // input type
    class?: string | null; // String
    imageUrl?: string | null; // String
    name?: string | null; // String
    quote?: string | null; // String
    ultimate?: string | null; // String
    weapon?: string | null; // String
  }
  OwcharacterWhereInput: { // input type
    _id?: string | null; // ID
    _id_contains?: string | null; // ID
    _id_ends_with?: string | null; // ID
    _id_gt?: string | null; // ID
    _id_gte?: string | null; // ID
    _id_in?: string[] | null; // [ID!]
    _id_lt?: string | null; // ID
    _id_lte?: string | null; // ID
    _id_not?: string | null; // ID
    _id_not_contains?: string | null; // ID
    _id_not_ends_with?: string | null; // ID
    _id_not_in?: string[] | null; // [ID!]
    _id_not_starts_with?: string | null; // ID
    _id_starts_with?: string | null; // ID
    AND?: NexusGenInputs['OwcharacterWhereInput'][] | null; // [OwcharacterWhereInput!]
    class?: string | null; // String
    class_contains?: string | null; // String
    class_ends_with?: string | null; // String
    class_gt?: string | null; // String
    class_gte?: string | null; // String
    class_in?: string[] | null; // [String!]
    class_lt?: string | null; // String
    class_lte?: string | null; // String
    class_not?: string | null; // String
    class_not_contains?: string | null; // String
    class_not_ends_with?: string | null; // String
    class_not_in?: string[] | null; // [String!]
    class_not_starts_with?: string | null; // String
    class_starts_with?: string | null; // String
    imageUrl?: string | null; // String
    imageUrl_contains?: string | null; // String
    imageUrl_ends_with?: string | null; // String
    imageUrl_gt?: string | null; // String
    imageUrl_gte?: string | null; // String
    imageUrl_in?: string[] | null; // [String!]
    imageUrl_lt?: string | null; // String
    imageUrl_lte?: string | null; // String
    imageUrl_not?: string | null; // String
    imageUrl_not_contains?: string | null; // String
    imageUrl_not_ends_with?: string | null; // String
    imageUrl_not_in?: string[] | null; // [String!]
    imageUrl_not_starts_with?: string | null; // String
    imageUrl_starts_with?: string | null; // String
    name?: string | null; // String
    name_contains?: string | null; // String
    name_ends_with?: string | null; // String
    name_gt?: string | null; // String
    name_gte?: string | null; // String
    name_in?: string[] | null; // [String!]
    name_lt?: string | null; // String
    name_lte?: string | null; // String
    name_not?: string | null; // String
    name_not_contains?: string | null; // String
    name_not_ends_with?: string | null; // String
    name_not_in?: string[] | null; // [String!]
    name_not_starts_with?: string | null; // String
    name_starts_with?: string | null; // String
    quote?: string | null; // String
    quote_contains?: string | null; // String
    quote_ends_with?: string | null; // String
    quote_gt?: string | null; // String
    quote_gte?: string | null; // String
    quote_in?: string[] | null; // [String!]
    quote_lt?: string | null; // String
    quote_lte?: string | null; // String
    quote_not?: string | null; // String
    quote_not_contains?: string | null; // String
    quote_not_ends_with?: string | null; // String
    quote_not_in?: string[] | null; // [String!]
    quote_not_starts_with?: string | null; // String
    quote_starts_with?: string | null; // String
    ultimate?: string | null; // String
    ultimate_contains?: string | null; // String
    ultimate_ends_with?: string | null; // String
    ultimate_gt?: string | null; // String
    ultimate_gte?: string | null; // String
    ultimate_in?: string[] | null; // [String!]
    ultimate_lt?: string | null; // String
    ultimate_lte?: string | null; // String
    ultimate_not?: string | null; // String
    ultimate_not_contains?: string | null; // String
    ultimate_not_ends_with?: string | null; // String
    ultimate_not_in?: string[] | null; // [String!]
    ultimate_not_starts_with?: string | null; // String
    ultimate_starts_with?: string | null; // String
    weapon?: string | null; // String
    weapon_contains?: string | null; // String
    weapon_ends_with?: string | null; // String
    weapon_gt?: string | null; // String
    weapon_gte?: string | null; // String
    weapon_in?: string[] | null; // [String!]
    weapon_lt?: string | null; // String
    weapon_lte?: string | null; // String
    weapon_not?: string | null; // String
    weapon_not_contains?: string | null; // String
    weapon_not_ends_with?: string | null; // String
    weapon_not_in?: string[] | null; // [String!]
    weapon_not_starts_with?: string | null; // String
    weapon_starts_with?: string | null; // String
  }
  OwcharacterWhereUniqueInput: { // input type
    _id?: string | null; // ID
  }
}

export interface NexusGenEnums {
  OwcharacterOrderByInput: "_id_ASC" | "_id_DESC" | "class_ASC" | "class_DESC" | "imageUrl_ASC" | "imageUrl_DESC" | "name_ASC" | "name_DESC" | "quote_ASC" | "quote_DESC" | "ultimate_ASC" | "ultimate_DESC" | "weapon_ASC" | "weapon_DESC"
}

export interface NexusGenRootTypes {
  AggregateOwcharacter: { // root type
    count: number; // Int!
  }
  BatchPayload: { // root type
    count: any; // Long!
  }
  Mutation: {};
  Owcharacter: { // root type
    _id: string; // ID!
    class?: string | null; // String
    imageUrl?: string | null; // String
    name?: string | null; // String
    quote?: string | null; // String
    ultimate?: string | null; // String
    weapon?: string | null; // String
  }
  OwcharacterConnection: { // root type
    edges: NexusGenRootTypes['OwcharacterEdge'][]; // [OwcharacterEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  OwcharacterEdge: { // root type
    cursor: string; // String!
    node: NexusGenRootTypes['Owcharacter']; // Owcharacter!
  }
  PageInfo: { // root type
    endCursor?: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor?: string | null; // String
  }
  Query: {};
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  Long: any;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  OwcharacterCreateInput: NexusGenInputs['OwcharacterCreateInput'];
  OwcharacterUpdateInput: NexusGenInputs['OwcharacterUpdateInput'];
  OwcharacterUpdateManyMutationInput: NexusGenInputs['OwcharacterUpdateManyMutationInput'];
  OwcharacterWhereInput: NexusGenInputs['OwcharacterWhereInput'];
  OwcharacterWhereUniqueInput: NexusGenInputs['OwcharacterWhereUniqueInput'];
  OwcharacterOrderByInput: NexusGenEnums['OwcharacterOrderByInput'];
}

export interface NexusGenFieldTypes {
  AggregateOwcharacter: { // field return type
    count: number; // Int!
  }
  BatchPayload: { // field return type
    count: any; // Long!
  }
  Mutation: { // field return type
    createOwcharacter: NexusGenRootTypes['Owcharacter']; // Owcharacter!
    deleteManyOwcharacters: NexusGenRootTypes['BatchPayload']; // BatchPayload!
    deleteOwcharacter: NexusGenRootTypes['Owcharacter'] | null; // Owcharacter
    updateManyOwcharacters: NexusGenRootTypes['BatchPayload']; // BatchPayload!
    updateOwcharacter: NexusGenRootTypes['Owcharacter'] | null; // Owcharacter
    upsertOwcharacter: NexusGenRootTypes['Owcharacter']; // Owcharacter!
  }
  Owcharacter: { // field return type
    _id: string; // ID!
    class: string | null; // String
    imageUrl: string | null; // String
    name: string | null; // String
    quote: string | null; // String
    ultimate: string | null; // String
    weapon: string | null; // String
  }
  OwcharacterConnection: { // field return type
    aggregate: NexusGenRootTypes['AggregateOwcharacter']; // AggregateOwcharacter!
    edges: NexusGenRootTypes['OwcharacterEdge'][]; // [OwcharacterEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  OwcharacterEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['Owcharacter']; // Owcharacter!
  }
  PageInfo: { // field return type
    endCursor: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor: string | null; // String
  }
  Query: { // field return type
    owcharacter: NexusGenRootTypes['Owcharacter'] | null; // Owcharacter
    owcharacters: NexusGenRootTypes['Owcharacter'][]; // [Owcharacter!]!
    owcharactersConnection: NexusGenRootTypes['OwcharacterConnection']; // OwcharacterConnection!
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createOwcharacter: { // args
      data: NexusGenInputs['OwcharacterCreateInput']; // OwcharacterCreateInput!
    }
    deleteManyOwcharacters: { // args
      where?: NexusGenInputs['OwcharacterWhereInput'] | null; // OwcharacterWhereInput
    }
    deleteOwcharacter: { // args
      where: NexusGenInputs['OwcharacterWhereUniqueInput']; // OwcharacterWhereUniqueInput!
    }
    updateManyOwcharacters: { // args
      data: NexusGenInputs['OwcharacterUpdateManyMutationInput']; // OwcharacterUpdateManyMutationInput!
      where?: NexusGenInputs['OwcharacterWhereInput'] | null; // OwcharacterWhereInput
    }
    updateOwcharacter: { // args
      data: NexusGenInputs['OwcharacterUpdateInput']; // OwcharacterUpdateInput!
      where: NexusGenInputs['OwcharacterWhereUniqueInput']; // OwcharacterWhereUniqueInput!
    }
    upsertOwcharacter: { // args
      create: NexusGenInputs['OwcharacterCreateInput']; // OwcharacterCreateInput!
      update: NexusGenInputs['OwcharacterUpdateInput']; // OwcharacterUpdateInput!
      where: NexusGenInputs['OwcharacterWhereUniqueInput']; // OwcharacterWhereUniqueInput!
    }
  }
  Query: {
    owcharacter: { // args
      where: NexusGenInputs['OwcharacterWhereUniqueInput']; // OwcharacterWhereUniqueInput!
    }
    owcharacters: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['OwcharacterOrderByInput'] | null; // OwcharacterOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['OwcharacterWhereInput'] | null; // OwcharacterWhereInput
    }
    owcharactersConnection: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['OwcharacterOrderByInput'] | null; // OwcharacterOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['OwcharacterWhereInput'] | null; // OwcharacterWhereInput
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "AggregateOwcharacter" | "BatchPayload" | "Mutation" | "Owcharacter" | "OwcharacterConnection" | "OwcharacterEdge" | "PageInfo" | "Query";

export type NexusGenInputNames = "OwcharacterCreateInput" | "OwcharacterUpdateInput" | "OwcharacterUpdateManyMutationInput" | "OwcharacterWhereInput" | "OwcharacterWhereUniqueInput";

export type NexusGenEnumNames = "OwcharacterOrderByInput";

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "Long" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}