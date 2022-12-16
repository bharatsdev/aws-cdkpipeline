#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { MyPipelineStack } from '../lib/my-pipeline-stack';

const app = new cdk.App();
new MyPipelineStack(app, 'MyPipLineStack', {
    env: {
        account: 'XXXXXXX',
        region: 'ap-south-1'
    }
});

app.synth()