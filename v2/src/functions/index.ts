import type { UserData } from "@/interface";
import { appstate } from "@/stores/appstate_store";

export function generateIds (mainContainerId: string) {
    const mainContainer = document.getElementById(mainContainerId) as HTMLElement;
    if(mainContainer == null) return;
    
    const elementCountMap = new Map<string, number>();

    mainContainer.querySelectorAll('*').forEach(element => {        
        if (element.closest('svg')) {
            return; 
        }

        const dpSuffix = appstate.darkPatterns ? "-dp" : "";
        const nodeName = element.nodeName.toLowerCase();
        const elementCount = elementCountMap.has(nodeName) ? elementCountMap.get(nodeName)! + 1 : 1;

        element.id = `${mainContainerId + dpSuffix}_${nodeName}-${elementCount}`;

        if(nodeName == 'div' && element.classList.length > 0) {
            element.id += `_${element.classList[0].toLowerCase()}`
        }

        if(['a', 'li', 'p', 'label', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'em', 'span', 'button'].includes(nodeName) && element.textContent) {
            const elementText = element.textContent.slice(0,20).replace(/[^a-zA-Z0-9-_]/g, ' ').trim().toLowerCase().replace(/\s+/g, '-');
            element.id += `_${elementText}`
        }

        if(nodeName == 'img') {
            const mediaElement = element as HTMLImageElement;
            const fileName = mediaElement.src.split('/').pop() || '';
            const fileNameBase = fileName.split('.')[0].toLowerCase();
            element.id += `_${fileNameBase}`
        }

        if(nodeName == 'video') {
            const mediaSource  = element.firstChild as HTMLSourceElement;
            const fileName = mediaSource.src.split('/').pop() || '';
            const fileNameBase = fileName.split('.')[0].toLowerCase();
            element.id += `_${fileNameBase}`
        }

        if (['input', 'textarea', 'select'].includes(nodeName) && element.getAttribute('name')) {
            const inputName = element.getAttribute('name')?.replace(/[^a-zA-Z0-9-_]/g, ' ').trim().toLowerCase().replace(' ', '-')
            element.id += `_${inputName}`;
        }

        elementCountMap.set(nodeName, elementCount);
    });
}

export function calcUserDataPercentage(userData: UserData): number {
        const completionArray = Object.values(userData) as string[];
        const filledValues = completionArray.filter(value => value.trim() !== '');
        return Math.round((filledValues.length / completionArray.length) * 100);
}

export function deepCopy(object: any): any {
    return JSON.parse(JSON.stringify(object));
}

export const convertData = <T>(obj: T): T => {
    var _obj: any = {};
    for (var key in obj) {
      _obj[key] = (obj as any)[key];
    }
    return deepCopy(_obj);
  }