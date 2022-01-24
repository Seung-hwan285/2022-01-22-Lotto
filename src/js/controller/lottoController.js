
export const getRandNumber=(min,max)=>{
    return Math.floor(Math.random()*(max-min+1));
}


export const openElement =(e)=>{
    return e.classList.remove('lotto-none');
};

export const hiddenElement=(e)=>{
    return e.classList.add('lotto-none');
}