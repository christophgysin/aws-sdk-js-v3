import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient.ts";
import { DescribeMountTargetsRequest, DescribeMountTargetsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DescribeMountTargetsCommand,
  serializeAws_restJson1DescribeMountTargetsCommand,
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

export type DescribeMountTargetsCommandInput = DescribeMountTargetsRequest;
export type DescribeMountTargetsCommandOutput = DescribeMountTargetsResponse & __MetadataBearer;

/**
 * <p>Returns the descriptions of all the current mount targets, or a specific mount target,
 *       for a file system. When requesting all of the current mount targets, the order of mount
 *       targets returned in the response is unspecified.</p>
 *
 *          <p>This operation requires permissions for the
 *         <code>elasticfilesystem:DescribeMountTargets</code> action, on either the file system ID
 *       that you specify in <code>FileSystemId</code>, or on the file system of the mount target that
 *       you specify in <code>MountTargetId</code>.</p>
 */
export class DescribeMountTargetsCommand extends $Command<
  DescribeMountTargetsCommandInput,
  DescribeMountTargetsCommandOutput,
  EFSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeMountTargetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EFSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeMountTargetsCommandInput, DescribeMountTargetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EFSClient";
    const commandName = "DescribeMountTargetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeMountTargetsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeMountTargetsResponse.filterSensitiveLog,
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

  private serialize(input: DescribeMountTargetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeMountTargetsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeMountTargetsCommandOutput> {
    return deserializeAws_restJson1DescribeMountTargetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
