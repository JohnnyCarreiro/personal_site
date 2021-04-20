export class RequestVisit {

    public name!: string
    public email!: string
    public phone!: string
    public company!: string
    public subject!: string
    public message!: string



    constructor (props: RequestVisit){
        Object.assign(this, props)
    }

}
