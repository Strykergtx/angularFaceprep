import { Injectable } from '@angular/core';
import  { Search } from './Search';
import { SEARCH } from './Search-Stock';

@Injectable()
export class SearchService {
	private search: Search[] = SEARCH;
  
  constructor() { }

  
getClick(SearchElement: string): Search{
	for(var i = 0; i < this.search.length; i++)
	{	
		if(this.search[i].SearchElement == SearchElement)
		{
			return this.search[i];
		}
	}
}
}