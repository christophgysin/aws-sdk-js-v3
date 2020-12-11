import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient.ts";
import { UpdateNodegroupConfigRequest, UpdateNodegroupConfigResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1UpdateNodegroupConfigCommand,
  serializeAws_restJson1UpdateNodegroupConfigCommand,
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

export type UpdateNodegroupConfigCommandInput = UpdateNodegroupConfigRequest;
export type UpdateNodegroupConfigCommandOutput = UpdateNodegroupConfigResponse & __MetadataBearer;

/**
 * <p>Updates an Amazon EKS managed node group configuration. Your node group continues to
 *             function during the update. The response output includes an update ID that you can use
 *             to track the status of your node group update with the <a>DescribeUpdate</a>
 *             API operation. Currently you can update the Kubernetes labels for a node group or the
 *             scaling configuration.</p>
 */
export class UpdateNodegroupConfigCommand extends $Command<
  UpdateNodegroupConfigCommandInput,
  UpdateNodegroupConfigCommandOutput,
  EKSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateNodegroupConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EKSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateNodegroupConfigCommandInput, UpdateNodegroupConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "UpdateNodegroupConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateNodegroupConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateNodegroupConfigResponse.filterSensitiveLog,
    };

    if (typeof logger.info === "function") {
      logger.info({
        clientName,
        commandName,
      });
    }

    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateNodegroupConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateNodegroupConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateNodegroupConfigCommandOutput> {
    return deserializeAws_restJson1UpdateNodegroupConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
