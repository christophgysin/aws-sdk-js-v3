import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient.ts";
import { ListCompatibleImagesRequest, ListCompatibleImagesResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListCompatibleImagesCommand,
  serializeAws_json1_1ListCompatibleImagesCommand,
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

export type ListCompatibleImagesCommandInput = ListCompatibleImagesRequest;
export type ListCompatibleImagesCommandOutput = ListCompatibleImagesResult & __MetadataBearer;

/**
 * <p>This action returns a list of the different Amazon EC2 Amazon Machine Images (AMIs)
 *       that are owned by your AWS account that would be supported for use on a Snow device.
 *       Currently, supported AMIs are based on the CentOS 7 (x86_64) - with Updates HVM, Ubuntu Server
 *       14.04 LTS (HVM), and Ubuntu 16.04 LTS - Xenial (HVM) images, available on the AWS
 *       Marketplace.</p>
 */
export class ListCompatibleImagesCommand extends $Command<
  ListCompatibleImagesCommandInput,
  ListCompatibleImagesCommandOutput,
  SnowballClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListCompatibleImagesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SnowballClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListCompatibleImagesCommandInput, ListCompatibleImagesCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SnowballClient";
    const commandName = "ListCompatibleImagesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListCompatibleImagesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListCompatibleImagesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListCompatibleImagesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListCompatibleImagesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListCompatibleImagesCommandOutput> {
    return deserializeAws_json1_1ListCompatibleImagesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
