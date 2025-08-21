#!/usr/bin/env node
import { game } from '../src/index.js'
import { showConditions, askQuestion, checkAnswer } from '../src/games/progression.js'

game(showConditions, askQuestion, checkAnswer)
