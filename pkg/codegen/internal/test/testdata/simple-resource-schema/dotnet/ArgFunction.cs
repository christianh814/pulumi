// *** WARNING: this file was generated by test. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Example
{
    public static class ArgFunction
    {
        public static Task<ArgFunctionResult> InvokeAsync(ArgFunctionArgs? args = null, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<ArgFunctionResult>("example::argFunction", args ?? new ArgFunctionArgs(), options.WithDefaults());

        public static Output<ArgFunctionResult> Invoke(ArgFunctionInvokeArgs? args = null, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.Invoke<ArgFunctionResult>("example::argFunction", args ?? new ArgFunctionInvokeArgs(), options.WithDefaults());
    }


    public sealed class ArgFunctionArgs : Pulumi.InvokeArgs
    {
        [Input("arg1")]
        public Pulumi.Example.Resource? Arg1 { get; set; }

        public ArgFunctionArgs()
        {
        }
    }

    public sealed class ArgFunctionInvokeArgs : Pulumi.InvokeArgs
    {
        [Input("arg1")]
        public Input<Pulumi.Example.Resource>? Arg1 { get; set; }

        public ArgFunctionInvokeArgs()
        {
        }
    }


    [OutputType]
    public sealed class ArgFunctionResult
    {
        public readonly Pulumi.Example.Resource? Result;

        [OutputConstructor]
        private ArgFunctionResult(Pulumi.Example.Resource? result)
        {
            Result = result;
        }
    }
}
