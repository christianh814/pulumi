// *** WARNING: this file was generated by test. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Mypkg
{
    public static class ListStorageAccountKeys
    {
        /// <summary>
        /// The response from the ListKeys operation.
        /// API Version: 2021-02-01.
        /// </summary>
        public static Task<ListStorageAccountKeysResult> InvokeAsync(ListStorageAccountKeysArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<ListStorageAccountKeysResult>("mypkg::listStorageAccountKeys", args ?? new ListStorageAccountKeysArgs(), options.WithDefaults());

        /// <summary>
        /// The response from the ListKeys operation.
        /// API Version: 2021-02-01.
        /// </summary>
        public static Output<ListStorageAccountKeysResult> Invoke(ListStorageAccountKeysInvokeArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.Invoke<ListStorageAccountKeysResult>("mypkg::listStorageAccountKeys", args ?? new ListStorageAccountKeysInvokeArgs(), options.WithDefaults());
    }


    public sealed class ListStorageAccountKeysArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
        /// </summary>
        [Input("accountName", required: true)]
        public string AccountName { get; set; } = null!;

        /// <summary>
        /// Specifies type of the key to be listed. Possible value is kerb.
        /// </summary>
        [Input("expand")]
        public string? Expand { get; set; }

        /// <summary>
        /// The name of the resource group within the user's subscription. The name is case insensitive.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public ListStorageAccountKeysArgs()
        {
        }
    }

    public sealed class ListStorageAccountKeysInvokeArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
        /// </summary>
        [Input("accountName", required: true)]
        public Input<string> AccountName { get; set; } = null!;

        /// <summary>
        /// Specifies type of the key to be listed. Possible value is kerb.
        /// </summary>
        [Input("expand")]
        public Input<string>? Expand { get; set; }

        /// <summary>
        /// The name of the resource group within the user's subscription. The name is case insensitive.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        public ListStorageAccountKeysInvokeArgs()
        {
        }
    }


    [OutputType]
    public sealed class ListStorageAccountKeysResult
    {
        /// <summary>
        /// Gets the list of storage account keys and their properties for the specified storage account.
        /// </summary>
        public readonly ImmutableArray<Outputs.StorageAccountKeyResponseResult> Keys;

        [OutputConstructor]
        private ListStorageAccountKeysResult(ImmutableArray<Outputs.StorageAccountKeyResponseResult> keys)
        {
            Keys = keys;
        }
    }
}
