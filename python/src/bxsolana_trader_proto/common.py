# Generated by the protocol buffer compiler.  DO NOT EDIT!
# sources: common.proto
# plugin: python-betterproto
from dataclasses import dataclass

import betterproto


class OrderType(betterproto.Enum):
    OT_MARKET = 0
    OT_LIMIT = 1
    OT_IOC = 2
    OT_POST = 3


class PerpOrderType(betterproto.Enum):
    """perp types : limit, trigger_market, trigger_limit, market, oracle"""

    POT_UNKNOWN = 0
    POT_MARKET = 1
    POT_LIMIT = 2
    POT_TRIGGER_MARKET = 3
    POT_TRIGGER_LIMIT = 4


class PerpPositionSide(betterproto.Enum):
    PS_UNKNOWN = 0
    PS_LONG = 1
    PS_SHORT = 2


class PostOnlyParams(betterproto.Enum):
    PO_NONE = 0
    PO_MUST_POST_ONLY = 1
    PO_TRY_POST_ONLY = 2


class MarginContract(betterproto.Enum):
    """don't use this in api.proto"""

    ALL_SPOTS = 0
    SOL_SPOT = 1
    USDC_SPOT = 2
    MSOL_SPOT = 3
    WBTC_SPOT = 4
    WETH_SPOT = 5
    USDT_SPOT = 6


class PerpContract(betterproto.Enum):
    ALL = 0
    SOL_PERP = 1
    ETH_PERP = 2
    BTC_PERP = 3
    APT_PERP = 4
    BONK_PERP = 5
    MATIC_PERP = 6
    ARB_PERP = 7
    DOGE_PERP = 8
    BNB_PERP = 9
    SUI_PERP = 10
    PEPE_PERP = 11
    OP_PERP = 12
    RNDR_PERP = 13
    XRP_PERP = 14


class PerpCollateralType(betterproto.Enum):
    PCT_DEPOSIT = 0
    PCT_WITHDRAWAL = 1
    PCT_TRANSFER = 2


class PerpCollateralToken(betterproto.Enum):
    PCTK_USDC = 0
    PCTK_SOL = 1


class Infinity(betterproto.Enum):
    INF_NOT = 0
    INF_POSITIVE = 1
    INF_NEGATIVE = 2


@dataclass
class PriceImpactPercent(betterproto.Message):
    percent: float = betterproto.double_field(1)
    infinity: "Infinity" = betterproto.enum_field(2)


@dataclass
class PriceImpactPercentV2(betterproto.Message):
    percent: float = betterproto.double_field(1)
    infinity: str = betterproto.string_field(2)


@dataclass
class Fee(betterproto.Message):
    amount: float = betterproto.float_field(1)
    mint: str = betterproto.string_field(2)
    percent: float = betterproto.float_field(3)
