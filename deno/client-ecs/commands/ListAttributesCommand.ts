import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient.ts";
import { ListAttributesRequest, ListAttributesResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListAttributesCommand,
  serializeAws_json1_1ListAttributesCommand,
} from "../protocols/Aws_json1_1.ts";
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

export type ListAttributesCommandInput = ListAttributesRequest;
export type ListAttributesCommandOutput = ListAttributesResponse & __MetadataBearer;

/**
 * <p>Lists the attributes for Amazon ECS resources within a specified target type and cluster.
 * 			When you specify a target type and cluster, <code>ListAttributes</code> returns a list
 * 			of attribute objects, one for each attribute on each resource. You can filter the list
 * 			of results to a single attribute name to only return results that have that name. You
 * 			can also filter the results by attribute name and value, for example, to see which
 * 			container instances in a cluster are running a Linux AMI
 * 			(<code>ecs.os-type=linux</code>). </p>
 */
export class ListAttributesCommand extends $Command<
  ListAttributesCommandInput,
  ListAttributesCommandOutput,
  ECSClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAttributesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAttributesCommandInput, ListAttributesCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "ListAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAttributesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAttributesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListAttributesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAttributesCommandOutput> {
    return deserializeAws_json1_1ListAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
