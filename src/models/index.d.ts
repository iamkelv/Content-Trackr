import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerDevTo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DevTo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly profile_name?: string | null;
  readonly article_title?: string | null;
  readonly pub_date?: string | null;
  readonly article_url?: string | null;
  readonly views?: number | null;
  readonly comments?: string | null;
  readonly engagement_rate?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDevTo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DevTo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly profile_name?: string | null;
  readonly article_title?: string | null;
  readonly pub_date?: string | null;
  readonly article_url?: string | null;
  readonly views?: number | null;
  readonly comments?: string | null;
  readonly engagement_rate?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type DevTo = LazyLoading extends LazyLoadingDisabled ? EagerDevTo : LazyDevTo

export declare const DevTo: (new (init: ModelInit<DevTo>) => DevTo) & {
  copyOf(source: DevTo, mutator: (draft: MutableModel<DevTo>) => MutableModel<DevTo> | void): DevTo;
}

type EagerHashnode = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Hashnode, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly profile_name?: string | null;
  readonly article_title?: string | null;
  readonly pub_date?: string | null;
  readonly article_url?: string | null;
  readonly views?: number | null;
  readonly comments?: string | null;
  readonly engagement_rate?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHashnode = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Hashnode, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly profile_name?: string | null;
  readonly article_title?: string | null;
  readonly pub_date?: string | null;
  readonly article_url?: string | null;
  readonly views?: number | null;
  readonly comments?: string | null;
  readonly engagement_rate?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Hashnode = LazyLoading extends LazyLoadingDisabled ? EagerHashnode : LazyHashnode

export declare const Hashnode: (new (init: ModelInit<Hashnode>) => Hashnode) & {
  copyOf(source: Hashnode, mutator: (draft: MutableModel<Hashnode>) => MutableModel<Hashnode> | void): Hashnode;
}

type EagerMedium = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Medium, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly profile_name: string;
  readonly article_title: string;
  readonly pub_date: string;
  readonly article_url: string;
  readonly views?: number | null;
  readonly comments?: string | null;
  readonly engagement_rate?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMedium = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Medium, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly profile_name: string;
  readonly article_title: string;
  readonly pub_date: string;
  readonly article_url: string;
  readonly views?: number | null;
  readonly comments?: string | null;
  readonly engagement_rate?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Medium = LazyLoading extends LazyLoadingDisabled ? EagerMedium : LazyMedium

export declare const Medium: (new (init: ModelInit<Medium>) => Medium) & {
  copyOf(source: Medium, mutator: (draft: MutableModel<Medium>) => MutableModel<Medium> | void): Medium;
}