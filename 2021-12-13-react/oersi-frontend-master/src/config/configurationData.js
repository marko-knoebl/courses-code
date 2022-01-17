import config from "react-global-configuration"
import prod from "./prod"

export const registerConfiguration = () => {
  config.set(prod, {freeze: false})
}
