// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract Contract {
  uint64 private price; // Making it immutable works

  constructor() {
    price = uint64(tx.gasprice);
  }
}
