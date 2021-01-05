import { MediaPackageVodClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageVodClient.ts";
import { ListPackagingGroupsRequest, ListPackagingGroupsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListPackagingGroupsCommand,
  serializeAws_restJson1ListPackagingGroupsCommand,
} from "../protocols/Aws_restJson1.ts";
import { getSerdePlugin } from "../../middleware-serde/mod.ts";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "../../protocol-http/mod.ts";
import { Command as $Command } from "../../smithy-client/mod.ts";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "../../types/mod.ts";

export type ListPackagingGroupsCommandInput = ListPackagingGroupsRequest;
export type ListPackagingGroupsCommandOutput = ListPackagingGroupsResponse & __MetadataBearer;

/**
 * Returns a collection of MediaPackage VOD PackagingGroup resources.
 */
export class ListPackagingGroupsCommand extends $Command<
  ListPackagingGroupsCommandInput,
  ListPackagingGroupsCommandOutput,
  MediaPackageVodClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListPackagingGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaPackageVodClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPackagingGroupsCommandInput, ListPackagingGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaPackageVodClient";
    const commandName = "ListPackagingGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPackagingGroupsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListPackagingGroupsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListPackagingGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListPackagingGroupsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPackagingGroupsCommandOutput> {
    return deserializeAws_restJson1ListPackagingGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
