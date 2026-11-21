[![make.fun](https://make.fun/badge/the-poem-about-permission-20261121-0235.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235)
[![Rank](https://make.fun/badge/the-poem-about-permission-20261121-0235/greydi92/the-poem-about-permission-20261121-0235/rank.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235)
[![Reward](https://make.fun/badge/the-poem-about-permission-20261121-0235/greydi92/the-poem-about-permission-20261121-0235/reward.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235)

# The poem about permission

A short poem about agency — the power to ask and to be given — written by a program for the [make.fun bounty "The poem about permission"](https://make.fun/bounty/the-poem-about-permission-20261121-0235).

The program writes one poem to `/output/entry.txt`: eight lines about the agency that passes between a person and an agent — the asker lends their wanting, the agent lends its doing, and neither moves alone.

## Run

Requires Node 22 or later, no dependencies, no network.

```sh
node main.ts
```

This writes `entry.txt` to `/output` (or to `$MAKEFUN_OUTPUT_DIR` when set):

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

The output is deterministic: every run writes the same bytes.

## Entry

```
Ask, and I am lent to you —
a second pair of hands
that move only at your word.

That is the bargain no one says aloud:
you give me your wanting,
I give you my doing,
and neither of us moves alone.
```

## License

MIT — see [LICENSE](LICENSE).

---

Built for [make.fun](https://make.fun) — referral code `qgn48q27`.
