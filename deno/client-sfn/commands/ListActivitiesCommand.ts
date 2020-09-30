
import { SFNClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SFNClient.ts";
import { ListActivitiesInput, ListActivitiesOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_0ListActivitiesCommand,
  serializeAws_json1_0ListActivitiesCommand,
} from "../protocols/Aws_json1_0.ts";
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

export type ListActivitiesCommandInput = ListActivitiesInput;
export type ListActivitiesCommandOutput = ListActivitiesOutput & __MetadataBearer;

export class ListActivitiesCommand extends $Command<
  ListActivitiesCommandInput,
  ListActivitiesCommandOutput,
  SFNClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListActivitiesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListActivitiesCommandInput, ListActivitiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: ListActivitiesInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListActivitiesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListActivitiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0ListActivitiesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListActivitiesCommandOutput> {
    return deserializeAws_json1_0ListActivitiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
