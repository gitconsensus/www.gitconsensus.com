
This simple project allows github projects to be automated. It uses "reaction" as a voting mechanism to automatically
merge (or close) pull requests.

![GitConsensus Merge Comment](/images/gitconsensus_merge_comment.png)

## Installation

On the [GitConsensusApp Page on Github](https://github.com/apps/gitconsensus) find the `Configure` to start.

Once installed each repository which should be managed by GitConsensus needs a `.gitconsensus.yaml` file to define the consensus rules used by the project.


## Consensus Rules

The file `.gitconsensus.yaml` needs to be placed in the repository to be managed. Any rule set to `false` or ommitted
will be skipped.

You can run `gitconsensus init` to start with a template configuration in the current working directory.

```yaml
# Which version of the consensus rules to use
version: 3

# Add extra labels for the vote counts and age when merging
extra_labels: false

# Don't count any vote from a user who votes for multiple options
prevent_doubles: true

# The following only applies to pull requests
pull_requests:

  # Minimum number of voters
  quorum: 5

  # Required percentage of "yes" votes (ignoring abstentions)
  threshold: 0.65

  # Only process votes by contributors
  contributors_only: false

  # Only process votes by collaborators
  collaborators_only: false

  # When defined only process votes from these github users
  whitelist:
    - alice
    - carol

  # When defined votes from these users will be ignored
  blacklist:
    - bob
    - dan

  # Number of hours after last action (commit or opening the pull request) before issue can be merged
  merge_delay: 24

  # Number of votes from contributors at which the mergedelay gets ignored, assuming no negative votes.
  delay_override: 10

  # When `delayoverride` is set this value is the minimum hours without changes before the PR will be merged
  merge_delay_min: 1

  # Require this amount of time in hours before a PR with a license change will be merged.
  licensed_delay: 72

  # Require this amount of time in hours before a PR with a consensus change will be merged.
  consensus_delay: 72

  # Do not allow license changes to be merged.
  license_lock: true

  # Do not allow consensus changes to be merged.
  consensus_lock: true

  # Number of hours after last action (commit or opening the pull request) before issue is autoclosed
  timeout: 720
```

## Voting

Votes are made by using reactions on the top level comment of the Pull Request.

| Reaction | Vote    |
|----------|---------|
| ![+1](https://assets-cdn.github.com/images/icons/emoji/unicode/1f44d.png "+1")       | Yes     |
| ![-1](https://assets-cdn.github.com/images/icons/emoji/unicode/1f44e.png "+1")       | No      |
| ![confused](https://assets-cdn.github.com/images/icons/emoji/unicode/1f615.png "confused") | Abstain |


## Label Overrides

Any Pull Request with a `WIP` or `DONTMERGE` label (case insensitive) will be skipped over.
