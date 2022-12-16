import { Stack, StackProps } from "aws-cdk-lib";
import { CodePipeline, CodePipelineSource, ShellStep } from "aws-cdk-lib/pipelines";
import { Construct } from "constructs";

export class MyPipelineStack extends Stack {

    constructor(scope: Construct, id: string, props: StackProps) {
        super(scope, id, props);

        const pipline = new CodePipeline(this, "Pipeline", {
            pipelineName: "MyFirstPipeLine",
            synth: new ShellStep('Synth', {
                input: CodePipelineSource.gitHub('OWNR/REPO', 'main'),
                commands: ['npm ci', 'npm run build', 'npx cdk synth']
            })
        });
    }


}