import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { ValidateMatchmakingRuleSetInput, ValidateMatchmakingRuleSetOutput } from "../models/models_0";
import {
  deserializeAws_json1_1ValidateMatchmakingRuleSetCommand,
  serializeAws_json1_1ValidateMatchmakingRuleSetCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type ValidateMatchmakingRuleSetCommandInput = ValidateMatchmakingRuleSetInput;
export type ValidateMatchmakingRuleSetCommandOutput = ValidateMatchmakingRuleSetOutput & __MetadataBearer;

export class ValidateMatchmakingRuleSetCommand extends $Command<
  ValidateMatchmakingRuleSetCommandInput,
  ValidateMatchmakingRuleSetCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ValidateMatchmakingRuleSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GameLiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ValidateMatchmakingRuleSetCommandInput, ValidateMatchmakingRuleSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: ValidateMatchmakingRuleSetInput.filterSensitiveLog,
      outputFilterSensitiveLog: ValidateMatchmakingRuleSetOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ValidateMatchmakingRuleSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ValidateMatchmakingRuleSetCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ValidateMatchmakingRuleSetCommandOutput> {
    return deserializeAws_json1_1ValidateMatchmakingRuleSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
