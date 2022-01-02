# Dice Roller
A javascript library for rolling dice using dice syntax

## Installation

### NPM
```bash
npm install @mrprim/dice-roller
```

### Yarn
```bash
yarn add @mrprim/dice-roller
```

## Usage

```javascript
import roll from '@mrprim/dice-roller'

const total = roll('1d6+1d4+3')
```

### Dice Notation

The input of the `roll` function must be a properly formatted string in dice notation format. EX: ` 2x4d10`

Multiple dice notation strings can be separated by `+` or `-` to roll more than one type of die or add one or more modifiers to a roll.

#### Multiplier (Nx)
Perform the following dice action multiple times - `2x4d10` rolls `4d10` twice.

#### Dice Type (dN)
The type of die to roll.

Valid dice type values: Integer, 'F' (for Fate die), '%' (for Percentile die; equivalent to d100)