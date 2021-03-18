/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts'

import type { Inbox } from '../Inbox'

export class Inbox__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(_bridge: string, overrides?: Overrides): Promise<Inbox> {
    return super.deploy(_bridge, overrides || {}) as Promise<Inbox>
  }
  getDeployTransaction(
    _bridge: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_bridge, overrides || {})
  }
  attach(address: string): Inbox {
    return super.attach(address) as Inbox
  }
  connect(signer: Signer): Inbox__factory {
    return super.connect(signer) as Inbox__factory
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Inbox {
    return new Contract(address, _abi, signerOrProvider) as Inbox
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'contract IBridge',
        name: '_bridge',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'messageNum',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'InboxMessageDelivered',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'messageNum',
        type: 'uint256',
      },
    ],
    name: 'InboxMessageDeliveredFromOrigin',
    type: 'event',
  },
  {
    inputs: [],
    name: 'bridge',
    outputs: [
      {
        internalType: 'contract IBridge',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'destAddr',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'maxSubmissionCost',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'submissionRefundAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'valueRefundAddress',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'createRetryableTicket',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'destAddr',
        type: 'address',
      },
    ],
    name: 'depositEth',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'maxGas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'gasPriceBid',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'destAddr',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'sendContractTransaction',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'maxGas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'gasPriceBid',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'destAddr',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'sendL1FundedContractTransaction',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'maxGas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'gasPriceBid',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'nonce',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'destAddr',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'sendL1FundedUnsignedTransaction',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'messageData',
        type: 'bytes',
      },
    ],
    name: 'sendL2Message',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'messageData',
        type: 'bytes',
      },
    ],
    name: 'sendL2MessageFromOrigin',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'maxGas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'gasPriceBid',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'nonce',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'destAddr',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'sendUnsignedTransaction',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b50604051610b07380380610b078339818101604052602081101561003357600080fd5b5051600080546001600160a01b039092166001600160a01b0319909216919091179055610aa2806100656000396000f3fe6080604052600436106100765760003560e01c80630909a6081461007b5780631fe927cf146101285780635075788b146101a35780635e9167581461024657806367ef3ab8146102d05780638a631aa61461035f578063ad9d4ba3146103fb578063b75436bb14610421578063e78cea921461049c575b600080fd5b610116600480360360c081101561009157600080fd5b6001600160a01b038235811692602081013592604082013592606083013581169260808101359091169181019060c0810160a0820135600160201b8111156100d857600080fd5b8201836020820111156100ea57600080fd5b803590602001918460018302840111600160201b8311171561010b57600080fd5b5090925090506104cd565b60408051918252519081900360200190f35b34801561013457600080fd5b506101166004803603602081101561014b57600080fd5b810190602081018135600160201b81111561016557600080fd5b82018360208201111561017757600080fd5b803590602001918460018302840111600160201b8311171561019857600080fd5b509092509050610577565b3480156101af57600080fd5b50610116600480360360c08110156101c657600080fd5b8135916020810135916040820135916001600160a01b03606082013516916080820135919081019060c0810160a0820135600160201b81111561020857600080fd5b82018360208201111561021a57600080fd5b803590602001918460018302840111600160201b8311171561023b57600080fd5b50909250905061061a565b6101166004803603608081101561025c57600080fd5b8135916020810135916001600160a01b036040830135169190810190608081016060820135600160201b81111561029257600080fd5b8201836020820111156102a457600080fd5b803590602001918460018302840111600160201b831117156102c557600080fd5b509092509050610699565b610116600480360360a08110156102e657600080fd5b8135916020810135916040820135916001600160a01b036060820135169181019060a081016080820135600160201b81111561032157600080fd5b82018360208201111561033357600080fd5b803590602001918460018302840111600160201b8311171561035457600080fd5b50909250905061071a565b34801561036b57600080fd5b50610116600480360360a081101561038257600080fd5b8135916020810135916001600160a01b036040830135169160608101359181019060a081016080820135600160201b8111156103bd57600080fd5b8201836020820111156103cf57600080fd5b803590602001918460018302840111600160201b831117156103f057600080fd5b5090925090506107a4565b6101166004803603602081101561041157600080fd5b50356001600160a01b031661081b565b34801561042d57600080fd5b506101166004803603602081101561044457600080fd5b810190602081018135600160201b81111561045e57600080fd5b82018360208201111561047057600080fd5b803590602001918460018302840111600160201b8311171561049157600080fd5b509092509050610878565b3480156104a857600080fd5b506104b161090d565b604080516001600160a01b039092168252519081900360200190f35b600061056b6009898a60601b60601c6001600160a01b03168a348b8b60601b60601c6001600160a01b03168b60601b60601c6001600160a01b03168b8b90508c8c604051602001808a815260200189815260200188815260200187815260200186815260200185815260200184815260200183838082843780830192505050995050505050505050505060405160208183030381529060405261091c565b98975050505050505050565b60003332146105bb576040805162461bcd60e51b815260206004820152600b60248201526a6f726967696e206f6e6c7960a81b604482015290519081900360640190fd5b60006105e5600333868660405180838380828437604051920182900390912093506109d592505050565b60405190915081907fab532385be8f1005a4b6ba8fa20a2245facb346134ac739fe9a5198dc1580b9c90600090a29392505050565b600061056b60033360008b8b8b8b60601b60601c6001600160a01b03168b8b8b604051602001808960ff1660ff1660f81b8152600101888152602001878152602001868152602001858152602001848152602001838380828437808301925050509850505050505050505060405160208183030381529060405261091c565b6000610710600733600189898960601b60601c6001600160a01b0316348a8a604051602001808860ff1660ff1660f81b81526001018781526020018681526020018581526020018481526020018383808284378083019250505097505050505050505060405160208183030381529060405261091c565b9695505050505050565b600061079960073360008a8a8a8a60601b60601c6001600160a01b0316348b8b604051602001808960ff1660ff1660f81b8152600101888152602001878152602001868152602001858152602001848152602001838380828437808301925050509850505050505050505060405160208183030381529060405261091c565b979650505050505050565b600061079960033360018a8a8a60601b60601c6001600160a01b03168a8a8a604051602001808860ff1660ff1660f81b81526001018781526020018681526020018581526020018481526020018383808284378083019250505097505050505050505060405160208183030381529060405261091c565b60408051600160f81b6020820152600060218201819052604182018190526001600160a01b0384166061830152346081808401919091528351808403909101815260a190920190925261087290600790849061091c565b92915050565b6000806108a3600333868660405180838380828437604051920182900390912093506109d592505050565b9050807fff64905f73a67fb594e0f940a8075a860db489ad991e032f48c81123eb52d60b858560405180806020018281038252848482818152602001925080828437600083820152604051601f909101601f19169092018290039550909350505050a29392505050565b6000546001600160a01b031681565b600080610931858585805190602001206109d5565b9050807fff64905f73a67fb594e0f940a8075a860db489ad991e032f48c81123eb52d60b846040518080602001828103825283818151815260200191508051906020019080838360005b8381101561099357818101518382015260200161097b565b50505050905090810190601f1680156109c05780820380516001836020036101000a031916815260200191505b509250505060405180910390a2949350505050565b60008054604080516302bbfad160e01b815260ff871660048201526001600160a01b03868116602483015260448201869052915191909216916302bbfad191349160648082019260209290919082900301818588803b158015610a3757600080fd5b505af1158015610a4b573d6000803e3d6000fd5b50505050506040513d6020811015610a6257600080fd5b505194935050505056fea2646970667358221220ea6ca74a2ab2b398d1a7378446abfa22c30e6e531ab9d31d9bae6c15b7e3daab64736f6c634300060b0033'