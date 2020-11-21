
import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient.ts";
import { ListInstanceGroupsInput, ListInstanceGroupsOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListInstanceGroupsCommand,
  serializeAws_json1_1ListInstanceGroupsCommand,
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

export type ListInstanceGroupsCommandInput = ListInstanceGroupsInput;
export type ListInstanceGroupsCommandOutput = ListInstanceGroupsOutput & __MetadataBearer;

export class ListInstanceGroupsCommand extends $Command<
  ListInstanceGroupsCommandInput,
  ListInstanceGroupsCommandOutput,
  EMRClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListInstanceGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListInstanceGroupsCommandInput, ListInstanceGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "ListInstanceGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListInstanceGroupsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListInstanceGroupsOutput.filterSensitiveLog,
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

  private serialize(input: ListInstanceGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListInstanceGroupsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListInstanceGroupsCommandOutput> {
    return deserializeAws_json1_1ListInstanceGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
