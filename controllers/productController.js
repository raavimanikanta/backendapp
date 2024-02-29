const getDetails=(req,res)=>{
    res.send([
{
SkuPartNumber: "DYN365_BUSCENTRAL_TEAM_MEMBER",
skuId: "2e3c4023-80f6-4711-aa5d-29e0ecb46835",

},
{
SkuPartNumber: "Teams_Premium_(for_Departments)",
Name: "Teams Premium (for Departments)",
"Teams_Premium_(for_Departments)_Total": "0",
"Teams_Premium_(for_Departments)_Assigned": "0",
"Teams_Premium_(for_Departments)_Available": "0"
}
])
}

module.exports.getDetails=getDetails
