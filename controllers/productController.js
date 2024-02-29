const getDetails=(req,res)=>{
    res.send([
{
SkuPartNumber: "VISIOCLIENT",
skuId: "c5928f49-12ba-48f7-ada3-0d743a3601d5",
Name: "Visio Plan 2",
VISIOCLIENT_Total: "5",
VISIOCLIENT_Assigned: "5",
VISIOCLIENT_Available: "0"
},
{
SkuPartNumber: "STREAM",
skuId: "1f2f344a-700d-42c9-9427-5cea1d5d7ba6",
Name: "Microsoft Stream Trial",
STREAM_Total: "1000000",
STREAM_Assigned: "2",
STREAM_Available: "999998"
},
{
SkuPartNumber: "POWER_BI_PRO",
skuId: "f8a1db68-be16-40ed-86d5-cb42ce701560",
Name: "Power BI Pro",
POWER_BI_PRO_Total: "125",
POWER_BI_PRO_Assigned: "24",
POWER_BI_PRO_Available: "101"
},
{
SkuPartNumber: "DYN365_BUSCENTRAL_ESSENTIAL",
skuId: "2880026b-2b0c-4251-8656-5d41ff11e3aa",
Name: "Dynamics 365 Business Central Essentials",
DYN365_BUSCENTRAL_ESSENTIAL_Total: "3",
DYN365_BUSCENTRAL_ESSENTIAL_Assigned: "5",
DYN365_BUSCENTRAL_ESSENTIAL_Available: "-2"
}])
}

module.exports.getDetails=getDetails
