import { Injectable } from '@angular/core';
import { Apollo, gql, QueryRef } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  private query: QueryRef<any> | undefined;
  constructor(private apollo: Apollo) { }

  get(queryConfig: any, columns: any) {
    const query = gql`
      query  ${queryConfig.queryName}($queryInput:QueryInput){
        ${queryConfig.queryName}(queryInput:$queryInput){
          data
        }
    }
    `;
    const reqConfig = queryConfig.variables;
    reqConfig.columns = columns;

    const variables: any = {
      queryInput: { ...reqConfig }
    }
    this.query = this.apollo.watchQuery({
      query,
      variables
    });

   return this.query.valueChanges
  }

  getById(){

  }

  create(){

  }

  update(){

  }

  delete(queryConfig:any,id:any){
    const query = gql`
    mutation  deleteData($queryInput:QueryInput){
        deleteData(queryInput:$queryInput){
         data
        }
    } `;
    const reqConfig = {
      datatable:  queryConfig?.variables?.datatable,
      id
    };
    const variables: any = {
      queryInput: { ...reqConfig }
    }
    return this.apollo.mutate({ mutation: query, variables })
  }

  login(email:string,password:string){
    const query = gql`
    mutation  login($queryInput:LoginInput){
      login(queryInput:$queryInput){
        token,
        name,
        id
        email
        }
    } `;
    const variables: any = {
      queryInput: { email,password }
    }
    return this.apollo.mutate({ mutation: query, variables })
  }


}
