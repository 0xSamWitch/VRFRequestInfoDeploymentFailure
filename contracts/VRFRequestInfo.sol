// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract VRFRequestInfo {
  uint64 private price; // Making it immutable works

  constructor() {
    price = uint64(tx.gasprice);
  }
}