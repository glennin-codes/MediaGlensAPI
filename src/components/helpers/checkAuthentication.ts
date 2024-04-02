
export const isAuthenticated =():boolean=>{
    const token=localStorage.getItem('id');
if (token){
    return true;
}else{
    return false;
}
}