import { config } from "dotenv"
import discordRpc from "discord-rpc"
import { data } from "./config/data.js"
config()

const clientId = process.env.clientId
const rpc = new discordRpc.Client({ transport: "ipc" })

discordRpc.register(clientId)

function setActivity() {
  if (!rpc) return
  rpc.setActivity(data)
}

rpc.on("ready", () => {
  setActivity()

  setInterval(() => {
    setActivity()
  }, 60 * 1000)

  console.log("RPC is active")
})

rpc.login({ clientId }).catch(console.error)
