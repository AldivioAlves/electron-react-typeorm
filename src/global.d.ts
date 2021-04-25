import { any } from 'sequelize/types/lib/operators'
import {Connection} from 'typeorm'

declare const RazorGlobals: {
    apiBaseUrl: string
  }

  declare let con: any
  