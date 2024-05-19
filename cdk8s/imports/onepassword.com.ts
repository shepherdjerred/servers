// deno-lint-ignore-file

// generated by cdk8s
import {
  ApiObject,
  ApiObjectMetadata,
  GroupVersionKind,
} from "https://esm.sh/cdk8s@2.68.58";
import { Construct } from "https://esm.sh/constructs@10.3.0";

/**
 * OnePasswordItem is the Schema for the onepassworditems API
 *
 * @schema OnePasswordItem
 */
export class OnePasswordItem extends ApiObject {
  /**
   * Returns the apiVersion and kind for "OnePasswordItem"
   */
  public static readonly GVK: GroupVersionKind = {
    apiVersion: "onepassword.com/v1",
    kind: "OnePasswordItem",
  };

  /**
   * Renders a Kubernetes manifest for "OnePasswordItem".
   *
   * This can be used to inline resource manifests inside other objects (e.g. as templates).
   *
   * @param props initialization props
   */
  public static manifest(props: OnePasswordItemProps = {}): any {
    return {
      ...OnePasswordItem.GVK,
      ...toJson_OnePasswordItemProps(props),
    };
  }

  /**
   * Defines a "OnePasswordItem" API object
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialization props
   */
  public constructor(
    scope: Construct,
    id: string,
    props: OnePasswordItemProps = {},
  ) {
    super(scope, id, {
      ...OnePasswordItem.GVK,
      ...props,
    });
  }

  /**
   * Renders the object to Kubernetes JSON.
   */
  public toJson(): any {
    const resolved = super.toJson();

    return {
      ...OnePasswordItem.GVK,
      ...toJson_OnePasswordItemProps(resolved),
    };
  }
}

/**
 * OnePasswordItem is the Schema for the onepassworditems API
 *
 * @schema OnePasswordItem
 */
export interface OnePasswordItemProps {
  /**
   * @schema OnePasswordItem#metadata
   */
  readonly metadata?: ApiObjectMetadata;

  /**
   * OnePasswordItemSpec defines the desired state of OnePasswordItem
   *
   * @schema OnePasswordItem#spec
   */
  readonly spec?: OnePasswordItemSpec;

  /**
   * Kubernetes secret type. More info: https://kubernetes.io/docs/concepts/configuration/secret/#secret-types
   *
   * @schema OnePasswordItem#type
   */
  readonly type?: string;
}

/**
 * Converts an object of type 'OnePasswordItemProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OnePasswordItemProps(
  obj: OnePasswordItemProps | undefined,
): Record<string, any> | undefined {
  if (obj === undefined) return undefined;
  const result = {
    "metadata": obj.metadata,
    "spec": toJson_OnePasswordItemSpec(obj.spec),
    "type": obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }),
    {},
  );
}
/* eslint-enable max-len, quote-props */

/**
 * OnePasswordItemSpec defines the desired state of OnePasswordItem
 *
 * @schema OnePasswordItemSpec
 */
export interface OnePasswordItemSpec {
  /**
   * @schema OnePasswordItemSpec#itemPath
   */
  readonly itemPath?: string;
}

/**
 * Converts an object of type 'OnePasswordItemSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OnePasswordItemSpec(
  obj: OnePasswordItemSpec | undefined,
): Record<string, any> | undefined {
  if (obj === undefined) return undefined;
  const result = {
    "itemPath": obj.itemPath,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }),
    {},
  );
}
/* eslint-enable max-len, quote-props */
