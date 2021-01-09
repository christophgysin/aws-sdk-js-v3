import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient.ts";
import { ListLaunchPathsInput, ListLaunchPathsOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListLaunchPathsCommand,
  serializeAws_json1_1ListLaunchPathsCommand,
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

export type ListLaunchPathsCommandInput = ListLaunchPathsInput;
export type ListLaunchPathsCommandOutput = ListLaunchPathsOutput & __MetadataBearer;

/**
 * <p>Lists the paths to the specified product. A path is how the user
 *          has access to a specified product, and is necessary when provisioning a product. A path
 *          also determines the constraints put on the product.</p>
 */
export class ListLaunchPathsCommand extends $Command<
  ListLaunchPathsCommandInput,
  ListLaunchPathsCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListLaunchPathsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListLaunchPathsCommandInput, ListLaunchPathsCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "ListLaunchPathsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListLaunchPathsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListLaunchPathsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListLaunchPathsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListLaunchPathsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListLaunchPathsCommandOutput> {
    return deserializeAws_json1_1ListLaunchPathsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
