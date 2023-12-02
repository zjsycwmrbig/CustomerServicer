export const messageStore = defineStore('message', {
    state: () => ({
      requests: [],
      responses: [],
    }),
    actions: {
        addRequest(request) {
            this.requests.push(request)
        },
        addResponse(response) {
            this.responses.push(response)
        },
        clearMessage(){
            this.requests = []
            this.responses = []
        }
    },
})
  