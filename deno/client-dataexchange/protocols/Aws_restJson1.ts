import { CancelJobCommandInput, CancelJobCommandOutput } from "../commands/CancelJobCommand.ts";
import { CreateDataSetCommandInput, CreateDataSetCommandOutput } from "../commands/CreateDataSetCommand.ts";
import { CreateJobCommandInput, CreateJobCommandOutput } from "../commands/CreateJobCommand.ts";
import { CreateRevisionCommandInput, CreateRevisionCommandOutput } from "../commands/CreateRevisionCommand.ts";
import { DeleteAssetCommandInput, DeleteAssetCommandOutput } from "../commands/DeleteAssetCommand.ts";
import { DeleteDataSetCommandInput, DeleteDataSetCommandOutput } from "../commands/DeleteDataSetCommand.ts";
import { DeleteRevisionCommandInput, DeleteRevisionCommandOutput } from "../commands/DeleteRevisionCommand.ts";
import { GetAssetCommandInput, GetAssetCommandOutput } from "../commands/GetAssetCommand.ts";
import { GetDataSetCommandInput, GetDataSetCommandOutput } from "../commands/GetDataSetCommand.ts";
import { GetJobCommandInput, GetJobCommandOutput } from "../commands/GetJobCommand.ts";
import { GetRevisionCommandInput, GetRevisionCommandOutput } from "../commands/GetRevisionCommand.ts";
import {
  ListDataSetRevisionsCommandInput,
  ListDataSetRevisionsCommandOutput,
} from "../commands/ListDataSetRevisionsCommand.ts";
import { ListDataSetsCommandInput, ListDataSetsCommandOutput } from "../commands/ListDataSetsCommand.ts";
import { ListJobsCommandInput, ListJobsCommandOutput } from "../commands/ListJobsCommand.ts";
import { ListRevisionAssetsCommandInput, ListRevisionAssetsCommandOutput } from "../commands/ListRevisionAssetsCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand.ts";
import { StartJobCommandInput, StartJobCommandOutput } from "../commands/StartJobCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand.ts";
import { UpdateAssetCommandInput, UpdateAssetCommandOutput } from "../commands/UpdateAssetCommand.ts";
import { UpdateDataSetCommandInput, UpdateDataSetCommandOutput } from "../commands/UpdateDataSetCommand.ts";
import { UpdateRevisionCommandInput, UpdateRevisionCommandOutput } from "../commands/UpdateRevisionCommand.ts";
import {
  AccessDeniedException,
  AssetDestinationEntry,
  AssetDetails,
  AssetEntry,
  AssetSourceEntry,
  ConflictException,
  DataSetEntry,
  Details,
  ExportAssetToSignedUrlRequestDetails,
  ExportAssetToSignedUrlResponseDetails,
  ExportAssetsToS3RequestDetails,
  ExportAssetsToS3ResponseDetails,
  ExportRevisionsToS3RequestDetails,
  ExportRevisionsToS3ResponseDetails,
  ExportServerSideEncryption,
  ImportAssetFromSignedUrlJobErrorDetails,
  ImportAssetFromSignedUrlRequestDetails,
  ImportAssetFromSignedUrlResponseDetails,
  ImportAssetsFromS3RequestDetails,
  ImportAssetsFromS3ResponseDetails,
  InternalServerException,
  JobEntry,
  JobError,
  OriginDetails,
  RequestDetails,
  ResourceNotFoundException,
  ResponseDetails,
  RevisionDestinationEntry,
  RevisionEntry,
  S3SnapshotAsset,
  ServiceLimitExceededException,
  ThrottlingException,
  ValidationException,
} from "../models/models_0.ts";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "../../protocol-http/mod.ts";
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
} from "../../smithy-client/mod.ts";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "../../types/mod.ts";

export const serializeAws_restJson1CancelJobCommand = async (
  input: CancelJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/jobs/{JobId}";
  if (input.JobId !== undefined) {
    const labelValue: string = input.JobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: JobId.");
    }
    resolvedPath = resolvedPath.replace("{JobId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: JobId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateDataSetCommand = async (
  input: CreateDataSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/data-sets";
  let body: any;
  body = JSON.stringify({
    ...(input.AssetType !== undefined && input.AssetType !== null && { AssetType: input.AssetType }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { Tags: serializeAws_restJson1MapOf__string(input.Tags, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateJobCommand = async (
  input: CreateJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/jobs";
  let body: any;
  body = JSON.stringify({
    ...(input.Details !== undefined &&
      input.Details !== null && { Details: serializeAws_restJson1RequestDetails(input.Details, context) }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateRevisionCommand = async (
  input: CreateRevisionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/data-sets/{DataSetId}/revisions";
  if (input.DataSetId !== undefined) {
    const labelValue: string = input.DataSetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DataSetId.");
    }
    resolvedPath = resolvedPath.replace("{DataSetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DataSetId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Comment !== undefined && input.Comment !== null && { Comment: input.Comment }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { Tags: serializeAws_restJson1MapOf__string(input.Tags, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteAssetCommand = async (
  input: DeleteAssetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/data-sets/{DataSetId}/revisions/{RevisionId}/assets/{AssetId}";
  if (input.AssetId !== undefined) {
    const labelValue: string = input.AssetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AssetId.");
    }
    resolvedPath = resolvedPath.replace("{AssetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AssetId.");
  }
  if (input.DataSetId !== undefined) {
    const labelValue: string = input.DataSetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DataSetId.");
    }
    resolvedPath = resolvedPath.replace("{DataSetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DataSetId.");
  }
  if (input.RevisionId !== undefined) {
    const labelValue: string = input.RevisionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RevisionId.");
    }
    resolvedPath = resolvedPath.replace("{RevisionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RevisionId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteDataSetCommand = async (
  input: DeleteDataSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/data-sets/{DataSetId}";
  if (input.DataSetId !== undefined) {
    const labelValue: string = input.DataSetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DataSetId.");
    }
    resolvedPath = resolvedPath.replace("{DataSetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DataSetId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteRevisionCommand = async (
  input: DeleteRevisionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/data-sets/{DataSetId}/revisions/{RevisionId}";
  if (input.DataSetId !== undefined) {
    const labelValue: string = input.DataSetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DataSetId.");
    }
    resolvedPath = resolvedPath.replace("{DataSetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DataSetId.");
  }
  if (input.RevisionId !== undefined) {
    const labelValue: string = input.RevisionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RevisionId.");
    }
    resolvedPath = resolvedPath.replace("{RevisionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RevisionId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetAssetCommand = async (
  input: GetAssetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/data-sets/{DataSetId}/revisions/{RevisionId}/assets/{AssetId}";
  if (input.AssetId !== undefined) {
    const labelValue: string = input.AssetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AssetId.");
    }
    resolvedPath = resolvedPath.replace("{AssetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AssetId.");
  }
  if (input.DataSetId !== undefined) {
    const labelValue: string = input.DataSetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DataSetId.");
    }
    resolvedPath = resolvedPath.replace("{DataSetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DataSetId.");
  }
  if (input.RevisionId !== undefined) {
    const labelValue: string = input.RevisionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RevisionId.");
    }
    resolvedPath = resolvedPath.replace("{RevisionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RevisionId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetDataSetCommand = async (
  input: GetDataSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/data-sets/{DataSetId}";
  if (input.DataSetId !== undefined) {
    const labelValue: string = input.DataSetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DataSetId.");
    }
    resolvedPath = resolvedPath.replace("{DataSetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DataSetId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetJobCommand = async (
  input: GetJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/jobs/{JobId}";
  if (input.JobId !== undefined) {
    const labelValue: string = input.JobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: JobId.");
    }
    resolvedPath = resolvedPath.replace("{JobId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: JobId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetRevisionCommand = async (
  input: GetRevisionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/data-sets/{DataSetId}/revisions/{RevisionId}";
  if (input.DataSetId !== undefined) {
    const labelValue: string = input.DataSetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DataSetId.");
    }
    resolvedPath = resolvedPath.replace("{DataSetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DataSetId.");
  }
  if (input.RevisionId !== undefined) {
    const labelValue: string = input.RevisionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RevisionId.");
    }
    resolvedPath = resolvedPath.replace("{RevisionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RevisionId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListDataSetRevisionsCommand = async (
  input: ListDataSetRevisionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/data-sets/{DataSetId}/revisions";
  if (input.DataSetId !== undefined) {
    const labelValue: string = input.DataSetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DataSetId.");
    }
    resolvedPath = resolvedPath.replace("{DataSetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DataSetId.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListDataSetsCommand = async (
  input: ListDataSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/data-sets";
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.Origin !== undefined && { origin: input.Origin }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListJobsCommand = async (
  input: ListJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/jobs";
  const query: any = {
    ...(input.DataSetId !== undefined && { dataSetId: input.DataSetId }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.RevisionId !== undefined && { revisionId: input.RevisionId }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListRevisionAssetsCommand = async (
  input: ListRevisionAssetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/data-sets/{DataSetId}/revisions/{RevisionId}/assets";
  if (input.DataSetId !== undefined) {
    const labelValue: string = input.DataSetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DataSetId.");
    }
    resolvedPath = resolvedPath.replace("{DataSetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DataSetId.");
  }
  if (input.RevisionId !== undefined) {
    const labelValue: string = input.RevisionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RevisionId.");
    }
    resolvedPath = resolvedPath.replace("{RevisionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RevisionId.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1StartJobCommand = async (
  input: StartJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/v1/jobs/{JobId}";
  if (input.JobId !== undefined) {
    const labelValue: string = input.JobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: JobId.");
    }
    resolvedPath = resolvedPath.replace("{JobId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: JobId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Tags !== undefined &&
      input.Tags !== null && { tags: serializeAws_restJson1MapOf__string(input.Tags, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  const query: any = {
    ...(input.TagKeys !== undefined && { tagKeys: (input.TagKeys || []).map((_entry) => _entry) }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1UpdateAssetCommand = async (
  input: UpdateAssetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/data-sets/{DataSetId}/revisions/{RevisionId}/assets/{AssetId}";
  if (input.AssetId !== undefined) {
    const labelValue: string = input.AssetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AssetId.");
    }
    resolvedPath = resolvedPath.replace("{AssetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AssetId.");
  }
  if (input.DataSetId !== undefined) {
    const labelValue: string = input.DataSetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DataSetId.");
    }
    resolvedPath = resolvedPath.replace("{DataSetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DataSetId.");
  }
  if (input.RevisionId !== undefined) {
    const labelValue: string = input.RevisionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RevisionId.");
    }
    resolvedPath = resolvedPath.replace("{RevisionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RevisionId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateDataSetCommand = async (
  input: UpdateDataSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/data-sets/{DataSetId}";
  if (input.DataSetId !== undefined) {
    const labelValue: string = input.DataSetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DataSetId.");
    }
    resolvedPath = resolvedPath.replace("{DataSetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DataSetId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateRevisionCommand = async (
  input: UpdateRevisionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/data-sets/{DataSetId}/revisions/{RevisionId}";
  if (input.DataSetId !== undefined) {
    const labelValue: string = input.DataSetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DataSetId.");
    }
    resolvedPath = resolvedPath.replace("{DataSetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DataSetId.");
  }
  if (input.RevisionId !== undefined) {
    const labelValue: string = input.RevisionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RevisionId.");
    }
    resolvedPath = resolvedPath.replace("{RevisionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RevisionId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Comment !== undefined && input.Comment !== null && { Comment: input.Comment }),
    ...(input.Finalized !== undefined && input.Finalized !== null && { Finalized: input.Finalized }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const deserializeAws_restJson1CancelJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelJobCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1CancelJobCommandError(output, context);
  }
  const contents: CancelJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CancelJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.dataexchange#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateDataSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSetCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDataSetCommandError(output, context);
  }
  const contents: CreateDataSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    AssetType: undefined,
    CreatedAt: undefined,
    Description: undefined,
    Id: undefined,
    Name: undefined,
    Origin: undefined,
    OriginDetails: undefined,
    SourceId: undefined,
    Tags: undefined,
    UpdatedAt: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = data.Arn;
  }
  if (data.AssetType !== undefined && data.AssetType !== null) {
    contents.AssetType = data.AssetType;
  }
  if (data.CreatedAt !== undefined && data.CreatedAt !== null) {
    contents.CreatedAt = new Date(data.CreatedAt);
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = data.Description;
  }
  if (data.Id !== undefined && data.Id !== null) {
    contents.Id = data.Id;
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = data.Name;
  }
  if (data.Origin !== undefined && data.Origin !== null) {
    contents.Origin = data.Origin;
  }
  if (data.OriginDetails !== undefined && data.OriginDetails !== null) {
    contents.OriginDetails = deserializeAws_restJson1OriginDetails(data.OriginDetails, context);
  }
  if (data.SourceId !== undefined && data.SourceId !== null) {
    contents.SourceId = data.SourceId;
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1MapOf__string(data.Tags, context);
  }
  if (data.UpdatedAt !== undefined && data.UpdatedAt !== null) {
    contents.UpdatedAt = new Date(data.UpdatedAt);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateDataSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.dataexchange#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceLimitExceededException":
    case "com.amazonaws.dataexchange#ServiceLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateJobCommandError(output, context);
  }
  const contents: CreateJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    CreatedAt: undefined,
    Details: undefined,
    Errors: undefined,
    Id: undefined,
    State: undefined,
    Type: undefined,
    UpdatedAt: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = data.Arn;
  }
  if (data.CreatedAt !== undefined && data.CreatedAt !== null) {
    contents.CreatedAt = new Date(data.CreatedAt);
  }
  if (data.Details !== undefined && data.Details !== null) {
    contents.Details = deserializeAws_restJson1ResponseDetails(data.Details, context);
  }
  if (data.Errors !== undefined && data.Errors !== null) {
    contents.Errors = deserializeAws_restJson1ListOfJobError(data.Errors, context);
  }
  if (data.Id !== undefined && data.Id !== null) {
    contents.Id = data.Id;
  }
  if (data.State !== undefined && data.State !== null) {
    contents.State = data.State;
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = data.Type;
  }
  if (data.UpdatedAt !== undefined && data.UpdatedAt !== null) {
    contents.UpdatedAt = new Date(data.UpdatedAt);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.dataexchange#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateRevisionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRevisionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateRevisionCommandError(output, context);
  }
  const contents: CreateRevisionCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    Comment: undefined,
    CreatedAt: undefined,
    DataSetId: undefined,
    Finalized: undefined,
    Id: undefined,
    SourceId: undefined,
    Tags: undefined,
    UpdatedAt: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = data.Arn;
  }
  if (data.Comment !== undefined && data.Comment !== null) {
    contents.Comment = data.Comment;
  }
  if (data.CreatedAt !== undefined && data.CreatedAt !== null) {
    contents.CreatedAt = new Date(data.CreatedAt);
  }
  if (data.DataSetId !== undefined && data.DataSetId !== null) {
    contents.DataSetId = data.DataSetId;
  }
  if (data.Finalized !== undefined && data.Finalized !== null) {
    contents.Finalized = data.Finalized;
  }
  if (data.Id !== undefined && data.Id !== null) {
    contents.Id = data.Id;
  }
  if (data.SourceId !== undefined && data.SourceId !== null) {
    contents.SourceId = data.SourceId;
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1MapOf__string(data.Tags, context);
  }
  if (data.UpdatedAt !== undefined && data.UpdatedAt !== null) {
    contents.UpdatedAt = new Date(data.UpdatedAt);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateRevisionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRevisionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.dataexchange#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteAssetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssetCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAssetCommandError(output, context);
  }
  const contents: DeleteAssetCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteAssetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.dataexchange#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.dataexchange#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteDataSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataSetCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDataSetCommandError(output, context);
  }
  const contents: DeleteDataSetCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteDataSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.dataexchange#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.dataexchange#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteRevisionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRevisionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteRevisionCommandError(output, context);
  }
  const contents: DeleteRevisionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteRevisionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRevisionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.dataexchange#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.dataexchange#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetAssetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAssetCommandError(output, context);
  }
  const contents: GetAssetCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    AssetDetails: undefined,
    AssetType: undefined,
    CreatedAt: undefined,
    DataSetId: undefined,
    Id: undefined,
    Name: undefined,
    RevisionId: undefined,
    SourceId: undefined,
    UpdatedAt: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = data.Arn;
  }
  if (data.AssetDetails !== undefined && data.AssetDetails !== null) {
    contents.AssetDetails = deserializeAws_restJson1AssetDetails(data.AssetDetails, context);
  }
  if (data.AssetType !== undefined && data.AssetType !== null) {
    contents.AssetType = data.AssetType;
  }
  if (data.CreatedAt !== undefined && data.CreatedAt !== null) {
    contents.CreatedAt = new Date(data.CreatedAt);
  }
  if (data.DataSetId !== undefined && data.DataSetId !== null) {
    contents.DataSetId = data.DataSetId;
  }
  if (data.Id !== undefined && data.Id !== null) {
    contents.Id = data.Id;
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = data.Name;
  }
  if (data.RevisionId !== undefined && data.RevisionId !== null) {
    contents.RevisionId = data.RevisionId;
  }
  if (data.SourceId !== undefined && data.SourceId !== null) {
    contents.SourceId = data.SourceId;
  }
  if (data.UpdatedAt !== undefined && data.UpdatedAt !== null) {
    contents.UpdatedAt = new Date(data.UpdatedAt);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetAssetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetDataSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDataSetCommandError(output, context);
  }
  const contents: GetDataSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    AssetType: undefined,
    CreatedAt: undefined,
    Description: undefined,
    Id: undefined,
    Name: undefined,
    Origin: undefined,
    OriginDetails: undefined,
    SourceId: undefined,
    Tags: undefined,
    UpdatedAt: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = data.Arn;
  }
  if (data.AssetType !== undefined && data.AssetType !== null) {
    contents.AssetType = data.AssetType;
  }
  if (data.CreatedAt !== undefined && data.CreatedAt !== null) {
    contents.CreatedAt = new Date(data.CreatedAt);
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = data.Description;
  }
  if (data.Id !== undefined && data.Id !== null) {
    contents.Id = data.Id;
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = data.Name;
  }
  if (data.Origin !== undefined && data.Origin !== null) {
    contents.Origin = data.Origin;
  }
  if (data.OriginDetails !== undefined && data.OriginDetails !== null) {
    contents.OriginDetails = deserializeAws_restJson1OriginDetails(data.OriginDetails, context);
  }
  if (data.SourceId !== undefined && data.SourceId !== null) {
    contents.SourceId = data.SourceId;
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1MapOf__string(data.Tags, context);
  }
  if (data.UpdatedAt !== undefined && data.UpdatedAt !== null) {
    contents.UpdatedAt = new Date(data.UpdatedAt);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetDataSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetJobCommandError(output, context);
  }
  const contents: GetJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    CreatedAt: undefined,
    Details: undefined,
    Errors: undefined,
    Id: undefined,
    State: undefined,
    Type: undefined,
    UpdatedAt: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = data.Arn;
  }
  if (data.CreatedAt !== undefined && data.CreatedAt !== null) {
    contents.CreatedAt = new Date(data.CreatedAt);
  }
  if (data.Details !== undefined && data.Details !== null) {
    contents.Details = deserializeAws_restJson1ResponseDetails(data.Details, context);
  }
  if (data.Errors !== undefined && data.Errors !== null) {
    contents.Errors = deserializeAws_restJson1ListOfJobError(data.Errors, context);
  }
  if (data.Id !== undefined && data.Id !== null) {
    contents.Id = data.Id;
  }
  if (data.State !== undefined && data.State !== null) {
    contents.State = data.State;
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = data.Type;
  }
  if (data.UpdatedAt !== undefined && data.UpdatedAt !== null) {
    contents.UpdatedAt = new Date(data.UpdatedAt);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetRevisionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRevisionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetRevisionCommandError(output, context);
  }
  const contents: GetRevisionCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    Comment: undefined,
    CreatedAt: undefined,
    DataSetId: undefined,
    Finalized: undefined,
    Id: undefined,
    SourceId: undefined,
    Tags: undefined,
    UpdatedAt: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = data.Arn;
  }
  if (data.Comment !== undefined && data.Comment !== null) {
    contents.Comment = data.Comment;
  }
  if (data.CreatedAt !== undefined && data.CreatedAt !== null) {
    contents.CreatedAt = new Date(data.CreatedAt);
  }
  if (data.DataSetId !== undefined && data.DataSetId !== null) {
    contents.DataSetId = data.DataSetId;
  }
  if (data.Finalized !== undefined && data.Finalized !== null) {
    contents.Finalized = data.Finalized;
  }
  if (data.Id !== undefined && data.Id !== null) {
    contents.Id = data.Id;
  }
  if (data.SourceId !== undefined && data.SourceId !== null) {
    contents.SourceId = data.SourceId;
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1MapOf__string(data.Tags, context);
  }
  if (data.UpdatedAt !== undefined && data.UpdatedAt !== null) {
    contents.UpdatedAt = new Date(data.UpdatedAt);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetRevisionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRevisionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListDataSetRevisionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataSetRevisionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDataSetRevisionsCommandError(output, context);
  }
  const contents: ListDataSetRevisionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    Revisions: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.Revisions !== undefined && data.Revisions !== null) {
    contents.Revisions = deserializeAws_restJson1ListOfRevisionEntry(data.Revisions, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListDataSetRevisionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataSetRevisionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListDataSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataSetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDataSetsCommandError(output, context);
  }
  const contents: ListDataSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    DataSets: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.DataSets !== undefined && data.DataSets !== null) {
    contents.DataSets = deserializeAws_restJson1ListOfDataSetEntry(data.DataSets, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListDataSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListJobsCommandError(output, context);
  }
  const contents: ListJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Jobs: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Jobs !== undefined && data.Jobs !== null) {
    contents.Jobs = deserializeAws_restJson1ListOfJobEntry(data.Jobs, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListRevisionAssetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRevisionAssetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListRevisionAssetsCommandError(output, context);
  }
  const contents: ListRevisionAssetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Assets: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Assets !== undefined && data.Assets !== null) {
    contents.Assets = deserializeAws_restJson1ListOfAssetEntry(data.Assets, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListRevisionAssetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRevisionAssetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    Tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1MapOf__string(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1StartJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartJobCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartJobCommandError(output, context);
  }
  const contents: StartJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.dataexchange#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.dataexchange#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateAssetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAssetCommandError(output, context);
  }
  const contents: UpdateAssetCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    AssetDetails: undefined,
    AssetType: undefined,
    CreatedAt: undefined,
    DataSetId: undefined,
    Id: undefined,
    Name: undefined,
    RevisionId: undefined,
    SourceId: undefined,
    UpdatedAt: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = data.Arn;
  }
  if (data.AssetDetails !== undefined && data.AssetDetails !== null) {
    contents.AssetDetails = deserializeAws_restJson1AssetDetails(data.AssetDetails, context);
  }
  if (data.AssetType !== undefined && data.AssetType !== null) {
    contents.AssetType = data.AssetType;
  }
  if (data.CreatedAt !== undefined && data.CreatedAt !== null) {
    contents.CreatedAt = new Date(data.CreatedAt);
  }
  if (data.DataSetId !== undefined && data.DataSetId !== null) {
    contents.DataSetId = data.DataSetId;
  }
  if (data.Id !== undefined && data.Id !== null) {
    contents.Id = data.Id;
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = data.Name;
  }
  if (data.RevisionId !== undefined && data.RevisionId !== null) {
    contents.RevisionId = data.RevisionId;
  }
  if (data.SourceId !== undefined && data.SourceId !== null) {
    contents.SourceId = data.SourceId;
  }
  if (data.UpdatedAt !== undefined && data.UpdatedAt !== null) {
    contents.UpdatedAt = new Date(data.UpdatedAt);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateAssetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.dataexchange#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.dataexchange#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateDataSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDataSetCommandError(output, context);
  }
  const contents: UpdateDataSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    AssetType: undefined,
    CreatedAt: undefined,
    Description: undefined,
    Id: undefined,
    Name: undefined,
    Origin: undefined,
    OriginDetails: undefined,
    SourceId: undefined,
    UpdatedAt: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = data.Arn;
  }
  if (data.AssetType !== undefined && data.AssetType !== null) {
    contents.AssetType = data.AssetType;
  }
  if (data.CreatedAt !== undefined && data.CreatedAt !== null) {
    contents.CreatedAt = new Date(data.CreatedAt);
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = data.Description;
  }
  if (data.Id !== undefined && data.Id !== null) {
    contents.Id = data.Id;
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = data.Name;
  }
  if (data.Origin !== undefined && data.Origin !== null) {
    contents.Origin = data.Origin;
  }
  if (data.OriginDetails !== undefined && data.OriginDetails !== null) {
    contents.OriginDetails = deserializeAws_restJson1OriginDetails(data.OriginDetails, context);
  }
  if (data.SourceId !== undefined && data.SourceId !== null) {
    contents.SourceId = data.SourceId;
  }
  if (data.UpdatedAt !== undefined && data.UpdatedAt !== null) {
    contents.UpdatedAt = new Date(data.UpdatedAt);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateDataSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.dataexchange#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateRevisionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRevisionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateRevisionCommandError(output, context);
  }
  const contents: UpdateRevisionCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    Comment: undefined,
    CreatedAt: undefined,
    DataSetId: undefined,
    Finalized: undefined,
    Id: undefined,
    SourceId: undefined,
    UpdatedAt: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = data.Arn;
  }
  if (data.Comment !== undefined && data.Comment !== null) {
    contents.Comment = data.Comment;
  }
  if (data.CreatedAt !== undefined && data.CreatedAt !== null) {
    contents.CreatedAt = new Date(data.CreatedAt);
  }
  if (data.DataSetId !== undefined && data.DataSetId !== null) {
    contents.DataSetId = data.DataSetId;
  }
  if (data.Finalized !== undefined && data.Finalized !== null) {
    contents.Finalized = data.Finalized;
  }
  if (data.Id !== undefined && data.Id !== null) {
    contents.Id = data.Id;
  }
  if (data.SourceId !== undefined && data.SourceId !== null) {
    contents.SourceId = data.SourceId;
  }
  if (data.UpdatedAt !== undefined && data.UpdatedAt !== null) {
    contents.UpdatedAt = new Date(data.UpdatedAt);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateRevisionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRevisionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.dataexchange#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.dataexchange#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.dataexchange#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dataexchange#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.dataexchange#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.dataexchange#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: ConflictException = {
    name: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    ResourceId: undefined,
    ResourceType: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.ResourceId !== undefined && data.ResourceId !== null) {
    contents.ResourceId = data.ResourceId;
  }
  if (data.ResourceType !== undefined && data.ResourceType !== null) {
    contents.ResourceType = data.ResourceType;
  }
  return contents;
};

const deserializeAws_restJson1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: InternalServerException = {
    name: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    ResourceId: undefined,
    ResourceType: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.ResourceId !== undefined && data.ResourceId !== null) {
    contents.ResourceId = data.ResourceId;
  }
  if (data.ResourceType !== undefined && data.ResourceType !== null) {
    contents.ResourceType = data.ResourceType;
  }
  return contents;
};

const deserializeAws_restJson1ServiceLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceLimitExceededException> => {
  const contents: ServiceLimitExceededException = {
    name: "ServiceLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    LimitName: undefined,
    LimitValue: undefined,
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.LimitName !== undefined && data.LimitName !== null) {
    contents.LimitName = data.LimitName;
  }
  if (data.LimitValue !== undefined && data.LimitValue !== null) {
    contents.LimitValue = data.LimitValue;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: ThrottlingException = {
    name: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: ValidationException = {
    name: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const serializeAws_restJson1AssetDestinationEntry = (input: AssetDestinationEntry, context: __SerdeContext): any => {
  return {
    ...(input.AssetId !== undefined && input.AssetId !== null && { AssetId: input.AssetId }),
    ...(input.Bucket !== undefined && input.Bucket !== null && { Bucket: input.Bucket }),
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
  };
};

const serializeAws_restJson1AssetSourceEntry = (input: AssetSourceEntry, context: __SerdeContext): any => {
  return {
    ...(input.Bucket !== undefined && input.Bucket !== null && { Bucket: input.Bucket }),
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
  };
};

const serializeAws_restJson1ExportAssetsToS3RequestDetails = (
  input: ExportAssetsToS3RequestDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssetDestinations !== undefined &&
      input.AssetDestinations !== null && {
        AssetDestinations: serializeAws_restJson1ListOfAssetDestinationEntry(input.AssetDestinations, context),
      }),
    ...(input.DataSetId !== undefined && input.DataSetId !== null && { DataSetId: input.DataSetId }),
    ...(input.Encryption !== undefined &&
      input.Encryption !== null && {
        Encryption: serializeAws_restJson1ExportServerSideEncryption(input.Encryption, context),
      }),
    ...(input.RevisionId !== undefined && input.RevisionId !== null && { RevisionId: input.RevisionId }),
  };
};

const serializeAws_restJson1ExportAssetToSignedUrlRequestDetails = (
  input: ExportAssetToSignedUrlRequestDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssetId !== undefined && input.AssetId !== null && { AssetId: input.AssetId }),
    ...(input.DataSetId !== undefined && input.DataSetId !== null && { DataSetId: input.DataSetId }),
    ...(input.RevisionId !== undefined && input.RevisionId !== null && { RevisionId: input.RevisionId }),
  };
};

const serializeAws_restJson1ExportRevisionsToS3RequestDetails = (
  input: ExportRevisionsToS3RequestDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataSetId !== undefined && input.DataSetId !== null && { DataSetId: input.DataSetId }),
    ...(input.Encryption !== undefined &&
      input.Encryption !== null && {
        Encryption: serializeAws_restJson1ExportServerSideEncryption(input.Encryption, context),
      }),
    ...(input.RevisionDestinations !== undefined &&
      input.RevisionDestinations !== null && {
        RevisionDestinations: serializeAws_restJson1ListOfRevisionDestinationEntry(input.RevisionDestinations, context),
      }),
  };
};

const serializeAws_restJson1ExportServerSideEncryption = (
  input: ExportServerSideEncryption,
  context: __SerdeContext
): any => {
  return {
    ...(input.KmsKeyArn !== undefined && input.KmsKeyArn !== null && { KmsKeyArn: input.KmsKeyArn }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_restJson1ImportAssetFromSignedUrlRequestDetails = (
  input: ImportAssetFromSignedUrlRequestDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssetName !== undefined && input.AssetName !== null && { AssetName: input.AssetName }),
    ...(input.DataSetId !== undefined && input.DataSetId !== null && { DataSetId: input.DataSetId }),
    ...(input.Md5Hash !== undefined && input.Md5Hash !== null && { Md5Hash: input.Md5Hash }),
    ...(input.RevisionId !== undefined && input.RevisionId !== null && { RevisionId: input.RevisionId }),
  };
};

const serializeAws_restJson1ImportAssetsFromS3RequestDetails = (
  input: ImportAssetsFromS3RequestDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssetSources !== undefined &&
      input.AssetSources !== null && {
        AssetSources: serializeAws_restJson1ListOfAssetSourceEntry(input.AssetSources, context),
      }),
    ...(input.DataSetId !== undefined && input.DataSetId !== null && { DataSetId: input.DataSetId }),
    ...(input.RevisionId !== undefined && input.RevisionId !== null && { RevisionId: input.RevisionId }),
  };
};

const serializeAws_restJson1ListOfAssetDestinationEntry = (
  input: AssetDestinationEntry[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AssetDestinationEntry(entry, context);
    });
};

const serializeAws_restJson1ListOfAssetSourceEntry = (input: AssetSourceEntry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AssetSourceEntry(entry, context);
    });
};

const serializeAws_restJson1ListOfRevisionDestinationEntry = (
  input: RevisionDestinationEntry[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1RevisionDestinationEntry(entry, context);
    });
};

const serializeAws_restJson1MapOf__string = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1RequestDetails = (input: RequestDetails, context: __SerdeContext): any => {
  return {
    ...(input.ExportAssetToSignedUrl !== undefined &&
      input.ExportAssetToSignedUrl !== null && {
        ExportAssetToSignedUrl: serializeAws_restJson1ExportAssetToSignedUrlRequestDetails(
          input.ExportAssetToSignedUrl,
          context
        ),
      }),
    ...(input.ExportAssetsToS3 !== undefined &&
      input.ExportAssetsToS3 !== null && {
        ExportAssetsToS3: serializeAws_restJson1ExportAssetsToS3RequestDetails(input.ExportAssetsToS3, context),
      }),
    ...(input.ExportRevisionsToS3 !== undefined &&
      input.ExportRevisionsToS3 !== null && {
        ExportRevisionsToS3: serializeAws_restJson1ExportRevisionsToS3RequestDetails(
          input.ExportRevisionsToS3,
          context
        ),
      }),
    ...(input.ImportAssetFromSignedUrl !== undefined &&
      input.ImportAssetFromSignedUrl !== null && {
        ImportAssetFromSignedUrl: serializeAws_restJson1ImportAssetFromSignedUrlRequestDetails(
          input.ImportAssetFromSignedUrl,
          context
        ),
      }),
    ...(input.ImportAssetsFromS3 !== undefined &&
      input.ImportAssetsFromS3 !== null && {
        ImportAssetsFromS3: serializeAws_restJson1ImportAssetsFromS3RequestDetails(input.ImportAssetsFromS3, context),
      }),
  };
};

const serializeAws_restJson1RevisionDestinationEntry = (
  input: RevisionDestinationEntry,
  context: __SerdeContext
): any => {
  return {
    ...(input.Bucket !== undefined && input.Bucket !== null && { Bucket: input.Bucket }),
    ...(input.KeyPattern !== undefined && input.KeyPattern !== null && { KeyPattern: input.KeyPattern }),
    ...(input.RevisionId !== undefined && input.RevisionId !== null && { RevisionId: input.RevisionId }),
  };
};

const deserializeAws_restJson1AssetDestinationEntry = (output: any, context: __SerdeContext): AssetDestinationEntry => {
  return {
    AssetId: output.AssetId !== undefined && output.AssetId !== null ? output.AssetId : undefined,
    Bucket: output.Bucket !== undefined && output.Bucket !== null ? output.Bucket : undefined,
    Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
  } as any;
};

const deserializeAws_restJson1AssetDetails = (output: any, context: __SerdeContext): AssetDetails => {
  return {
    S3SnapshotAsset:
      output.S3SnapshotAsset !== undefined && output.S3SnapshotAsset !== null
        ? deserializeAws_restJson1S3SnapshotAsset(output.S3SnapshotAsset, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AssetEntry = (output: any, context: __SerdeContext): AssetEntry => {
  return {
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    AssetDetails:
      output.AssetDetails !== undefined && output.AssetDetails !== null
        ? deserializeAws_restJson1AssetDetails(output.AssetDetails, context)
        : undefined,
    AssetType: output.AssetType !== undefined && output.AssetType !== null ? output.AssetType : undefined,
    CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null ? new Date(output.CreatedAt) : undefined,
    DataSetId: output.DataSetId !== undefined && output.DataSetId !== null ? output.DataSetId : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    RevisionId: output.RevisionId !== undefined && output.RevisionId !== null ? output.RevisionId : undefined,
    SourceId: output.SourceId !== undefined && output.SourceId !== null ? output.SourceId : undefined,
    UpdatedAt: output.UpdatedAt !== undefined && output.UpdatedAt !== null ? new Date(output.UpdatedAt) : undefined,
  } as any;
};

const deserializeAws_restJson1AssetSourceEntry = (output: any, context: __SerdeContext): AssetSourceEntry => {
  return {
    Bucket: output.Bucket !== undefined && output.Bucket !== null ? output.Bucket : undefined,
    Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
  } as any;
};

const deserializeAws_restJson1DataSetEntry = (output: any, context: __SerdeContext): DataSetEntry => {
  return {
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    AssetType: output.AssetType !== undefined && output.AssetType !== null ? output.AssetType : undefined,
    CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null ? new Date(output.CreatedAt) : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Origin: output.Origin !== undefined && output.Origin !== null ? output.Origin : undefined,
    OriginDetails:
      output.OriginDetails !== undefined && output.OriginDetails !== null
        ? deserializeAws_restJson1OriginDetails(output.OriginDetails, context)
        : undefined,
    SourceId: output.SourceId !== undefined && output.SourceId !== null ? output.SourceId : undefined,
    UpdatedAt: output.UpdatedAt !== undefined && output.UpdatedAt !== null ? new Date(output.UpdatedAt) : undefined,
  } as any;
};

const deserializeAws_restJson1Details = (output: any, context: __SerdeContext): Details => {
  return {
    ImportAssetFromSignedUrlJobErrorDetails:
      output.ImportAssetFromSignedUrlJobErrorDetails !== undefined &&
      output.ImportAssetFromSignedUrlJobErrorDetails !== null
        ? deserializeAws_restJson1ImportAssetFromSignedUrlJobErrorDetails(
            output.ImportAssetFromSignedUrlJobErrorDetails,
            context
          )
        : undefined,
    ImportAssetsFromS3JobErrorDetails:
      output.ImportAssetsFromS3JobErrorDetails !== undefined && output.ImportAssetsFromS3JobErrorDetails !== null
        ? deserializeAws_restJson1ListOfAssetSourceEntry(output.ImportAssetsFromS3JobErrorDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ExportAssetsToS3ResponseDetails = (
  output: any,
  context: __SerdeContext
): ExportAssetsToS3ResponseDetails => {
  return {
    AssetDestinations:
      output.AssetDestinations !== undefined && output.AssetDestinations !== null
        ? deserializeAws_restJson1ListOfAssetDestinationEntry(output.AssetDestinations, context)
        : undefined,
    DataSetId: output.DataSetId !== undefined && output.DataSetId !== null ? output.DataSetId : undefined,
    Encryption:
      output.Encryption !== undefined && output.Encryption !== null
        ? deserializeAws_restJson1ExportServerSideEncryption(output.Encryption, context)
        : undefined,
    RevisionId: output.RevisionId !== undefined && output.RevisionId !== null ? output.RevisionId : undefined,
  } as any;
};

const deserializeAws_restJson1ExportAssetToSignedUrlResponseDetails = (
  output: any,
  context: __SerdeContext
): ExportAssetToSignedUrlResponseDetails => {
  return {
    AssetId: output.AssetId !== undefined && output.AssetId !== null ? output.AssetId : undefined,
    DataSetId: output.DataSetId !== undefined && output.DataSetId !== null ? output.DataSetId : undefined,
    RevisionId: output.RevisionId !== undefined && output.RevisionId !== null ? output.RevisionId : undefined,
    SignedUrl: output.SignedUrl !== undefined && output.SignedUrl !== null ? output.SignedUrl : undefined,
    SignedUrlExpiresAt:
      output.SignedUrlExpiresAt !== undefined && output.SignedUrlExpiresAt !== null
        ? new Date(output.SignedUrlExpiresAt)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ExportRevisionsToS3ResponseDetails = (
  output: any,
  context: __SerdeContext
): ExportRevisionsToS3ResponseDetails => {
  return {
    DataSetId: output.DataSetId !== undefined && output.DataSetId !== null ? output.DataSetId : undefined,
    Encryption:
      output.Encryption !== undefined && output.Encryption !== null
        ? deserializeAws_restJson1ExportServerSideEncryption(output.Encryption, context)
        : undefined,
    RevisionDestinations:
      output.RevisionDestinations !== undefined && output.RevisionDestinations !== null
        ? deserializeAws_restJson1ListOfRevisionDestinationEntry(output.RevisionDestinations, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ExportServerSideEncryption = (
  output: any,
  context: __SerdeContext
): ExportServerSideEncryption => {
  return {
    KmsKeyArn: output.KmsKeyArn !== undefined && output.KmsKeyArn !== null ? output.KmsKeyArn : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeAws_restJson1ImportAssetFromSignedUrlJobErrorDetails = (
  output: any,
  context: __SerdeContext
): ImportAssetFromSignedUrlJobErrorDetails => {
  return {
    AssetName: output.AssetName !== undefined && output.AssetName !== null ? output.AssetName : undefined,
  } as any;
};

const deserializeAws_restJson1ImportAssetFromSignedUrlResponseDetails = (
  output: any,
  context: __SerdeContext
): ImportAssetFromSignedUrlResponseDetails => {
  return {
    AssetName: output.AssetName !== undefined && output.AssetName !== null ? output.AssetName : undefined,
    DataSetId: output.DataSetId !== undefined && output.DataSetId !== null ? output.DataSetId : undefined,
    Md5Hash: output.Md5Hash !== undefined && output.Md5Hash !== null ? output.Md5Hash : undefined,
    RevisionId: output.RevisionId !== undefined && output.RevisionId !== null ? output.RevisionId : undefined,
    SignedUrl: output.SignedUrl !== undefined && output.SignedUrl !== null ? output.SignedUrl : undefined,
    SignedUrlExpiresAt:
      output.SignedUrlExpiresAt !== undefined && output.SignedUrlExpiresAt !== null
        ? new Date(output.SignedUrlExpiresAt)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ImportAssetsFromS3ResponseDetails = (
  output: any,
  context: __SerdeContext
): ImportAssetsFromS3ResponseDetails => {
  return {
    AssetSources:
      output.AssetSources !== undefined && output.AssetSources !== null
        ? deserializeAws_restJson1ListOfAssetSourceEntry(output.AssetSources, context)
        : undefined,
    DataSetId: output.DataSetId !== undefined && output.DataSetId !== null ? output.DataSetId : undefined,
    RevisionId: output.RevisionId !== undefined && output.RevisionId !== null ? output.RevisionId : undefined,
  } as any;
};

const deserializeAws_restJson1JobEntry = (output: any, context: __SerdeContext): JobEntry => {
  return {
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null ? new Date(output.CreatedAt) : undefined,
    Details:
      output.Details !== undefined && output.Details !== null
        ? deserializeAws_restJson1ResponseDetails(output.Details, context)
        : undefined,
    Errors:
      output.Errors !== undefined && output.Errors !== null
        ? deserializeAws_restJson1ListOfJobError(output.Errors, context)
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    UpdatedAt: output.UpdatedAt !== undefined && output.UpdatedAt !== null ? new Date(output.UpdatedAt) : undefined,
  } as any;
};

const deserializeAws_restJson1JobError = (output: any, context: __SerdeContext): JobError => {
  return {
    Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
    Details:
      output.Details !== undefined && output.Details !== null
        ? deserializeAws_restJson1Details(output.Details, context)
        : undefined,
    LimitName: output.LimitName !== undefined && output.LimitName !== null ? output.LimitName : undefined,
    LimitValue: output.LimitValue !== undefined && output.LimitValue !== null ? output.LimitValue : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
    ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
  } as any;
};

const deserializeAws_restJson1ListOfAssetDestinationEntry = (
  output: any,
  context: __SerdeContext
): AssetDestinationEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AssetDestinationEntry(entry, context);
    });
};

const deserializeAws_restJson1ListOfAssetEntry = (output: any, context: __SerdeContext): AssetEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AssetEntry(entry, context);
    });
};

const deserializeAws_restJson1ListOfAssetSourceEntry = (output: any, context: __SerdeContext): AssetSourceEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AssetSourceEntry(entry, context);
    });
};

const deserializeAws_restJson1ListOfDataSetEntry = (output: any, context: __SerdeContext): DataSetEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DataSetEntry(entry, context);
    });
};

const deserializeAws_restJson1ListOfJobEntry = (output: any, context: __SerdeContext): JobEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1JobEntry(entry, context);
    });
};

const deserializeAws_restJson1ListOfJobError = (output: any, context: __SerdeContext): JobError[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1JobError(entry, context);
    });
};

const deserializeAws_restJson1ListOfRevisionDestinationEntry = (
  output: any,
  context: __SerdeContext
): RevisionDestinationEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RevisionDestinationEntry(entry, context);
    });
};

const deserializeAws_restJson1ListOfRevisionEntry = (output: any, context: __SerdeContext): RevisionEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RevisionEntry(entry, context);
    });
};

const deserializeAws_restJson1MapOf__string = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const deserializeAws_restJson1OriginDetails = (output: any, context: __SerdeContext): OriginDetails => {
  return {
    ProductId: output.ProductId !== undefined && output.ProductId !== null ? output.ProductId : undefined,
  } as any;
};

const deserializeAws_restJson1ResponseDetails = (output: any, context: __SerdeContext): ResponseDetails => {
  return {
    ExportAssetToSignedUrl:
      output.ExportAssetToSignedUrl !== undefined && output.ExportAssetToSignedUrl !== null
        ? deserializeAws_restJson1ExportAssetToSignedUrlResponseDetails(output.ExportAssetToSignedUrl, context)
        : undefined,
    ExportAssetsToS3:
      output.ExportAssetsToS3 !== undefined && output.ExportAssetsToS3 !== null
        ? deserializeAws_restJson1ExportAssetsToS3ResponseDetails(output.ExportAssetsToS3, context)
        : undefined,
    ExportRevisionsToS3:
      output.ExportRevisionsToS3 !== undefined && output.ExportRevisionsToS3 !== null
        ? deserializeAws_restJson1ExportRevisionsToS3ResponseDetails(output.ExportRevisionsToS3, context)
        : undefined,
    ImportAssetFromSignedUrl:
      output.ImportAssetFromSignedUrl !== undefined && output.ImportAssetFromSignedUrl !== null
        ? deserializeAws_restJson1ImportAssetFromSignedUrlResponseDetails(output.ImportAssetFromSignedUrl, context)
        : undefined,
    ImportAssetsFromS3:
      output.ImportAssetsFromS3 !== undefined && output.ImportAssetsFromS3 !== null
        ? deserializeAws_restJson1ImportAssetsFromS3ResponseDetails(output.ImportAssetsFromS3, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1RevisionDestinationEntry = (
  output: any,
  context: __SerdeContext
): RevisionDestinationEntry => {
  return {
    Bucket: output.Bucket !== undefined && output.Bucket !== null ? output.Bucket : undefined,
    KeyPattern: output.KeyPattern !== undefined && output.KeyPattern !== null ? output.KeyPattern : undefined,
    RevisionId: output.RevisionId !== undefined && output.RevisionId !== null ? output.RevisionId : undefined,
  } as any;
};

const deserializeAws_restJson1RevisionEntry = (output: any, context: __SerdeContext): RevisionEntry => {
  return {
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    Comment: output.Comment !== undefined && output.Comment !== null ? output.Comment : undefined,
    CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null ? new Date(output.CreatedAt) : undefined,
    DataSetId: output.DataSetId !== undefined && output.DataSetId !== null ? output.DataSetId : undefined,
    Finalized: output.Finalized !== undefined && output.Finalized !== null ? output.Finalized : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    SourceId: output.SourceId !== undefined && output.SourceId !== null ? output.SourceId : undefined,
    UpdatedAt: output.UpdatedAt !== undefined && output.UpdatedAt !== null ? new Date(output.UpdatedAt) : undefined,
  } as any;
};

const deserializeAws_restJson1S3SnapshotAsset = (output: any, context: __SerdeContext): S3SnapshotAsset => {
  return {
    Size: output.Size !== undefined && output.Size !== null ? output.Size : undefined,
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }

  return "";
};
