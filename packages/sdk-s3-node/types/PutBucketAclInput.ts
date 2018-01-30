import {_AccessControlPolicy} from './_AccessControlPolicy';
import {AbortSignal as __AbortSignal__, NodeHttpOptions as __HttpOptions__} from '@aws/types';

/**
 * PutBucketAclInput shape
 */
export interface PutBucketAclInput {
    /**
     * The canned ACL to apply to the bucket.
     */
    ACL?: 'private'|'public-read'|'public-read-write'|'authenticated-read'|string;

    /**
     * _AccessControlPolicy shape
     */
    AccessControlPolicy?: _AccessControlPolicy;

    /**
     * _BucketName shape
     */
    Bucket: string;

    /**
     * _ContentMD5 shape
     */
    ContentMD5?: string;

    /**
     * Allows grantee the read, write, read ACP, and write ACP permissions on the bucket.
     */
    GrantFullControl?: string;

    /**
     * Allows grantee to list the objects in the bucket.
     */
    GrantRead?: string;

    /**
     * Allows grantee to read the bucket ACL.
     */
    GrantReadACP?: string;

    /**
     * Allows grantee to create, overwrite, and delete any object in the bucket.
     */
    GrantWrite?: string;

    /**
     * Allows grantee to write the ACL for the applicable bucket.
     */
    GrantWriteACP?: string;

    /**
     * Whether to use the bucket name as the endpoint for this request. The bucket
    name must be a domain name with a CNAME record alias to an appropriate virtual
    hosted-style S3 hostname, e.g. a bucket of `images.johnsmith.net` and a DNS
    record of:

    ```
    images.johnsmith.net CNAME 			images.johnsmith.net.s3.amazonaws.com.
    ```

    @see https://docs.aws.amazon.com/AmazonS3/latest/dev/VirtualHosting.html#VirtualHostingCustomURLs
     */
    $bucketEndpoint?: string;

    /**
     * Whether to force path style URLs for S3 objects (e.g., https://s3.amazonaws.com/<bucketName>/<key> instead of https://<bucketName>.s3.amazonaws.com/<key>
     */
    $forcePathStyle?: boolean;

    /**
     * Whether to use the S3 Transfer Acceleration endpoint by default
     */
    $useAccelerateEndpoint?: boolean;

    /**
     * Enables IPv6/IPv4 dualstack endpoint. When a DNS lookup is performed on an endpoint of this type, it returns an “A” record with an IPv4 address and an “AAAA” record with an IPv6 address. In most cases the network stack in the client environment will automatically prefer the AAAA record and make a connection using the IPv6 address. Note, however, that currently on Windows, the IPv4 address will be preferred.
     */
    $useDualstackEndpoint?: boolean;

    /**
     * The maximum number of times this operation should be retried. If set, this
     * value will override the `maxRetries` configuration set on the client for
     * this command.
     */
    $maxRetries?: number;

    /**
     * An object that may be queried to determine if the underlying operation
     * has been aborted.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
     */
    $abortSignal?: __AbortSignal__

    /**
     * Per-request HTTP configuration options. If set, any options specified will
     * override the corresponding HTTP option set on the client for this command.
     */
    $httpOptions?: __HttpOptions__
}