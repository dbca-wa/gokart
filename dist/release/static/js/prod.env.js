var env = {
    appType: (window.location.protocol == "file:")?"cordova":"webapp",

    cswService:"https://csw.dpaw.wa.gov.au/catalogue/api/records/",
    catalogueAdminService:"https://csw.dpaw.wa.gov.au",

    kmiService:"https://kmi.dpaw.wa.gov.au/geoserver",
    legendSrc:"https://kmi.dpaw.wa.gov.au/geoserver/gwc/service/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&legend_options=fontName:Times%20New%20Roman;fontAntiAliasing:true;fontSize:14;bgColor:0xFFFFEE;dpi:120;labelMargin:10&LAYER=",

    gokartService:"https://sss.dpaw.wa.gov.au",
    resourceTrackingService:"https://resourcetracking.dpaw.wa.gov.au",
    bfrsService:"https://bfrs.dpaw.wa.gov.au",
    staticService:"https://static.dpaw.wa.gov.au",

    s3Service:"http://gokart.dpaw.io/",

    appMapping:{
    },
    layerMapping:{
        "cddp:other_tenures"                        : "cddp:other_tenures_new"
    },
    overviewLayer:"dbca:mapbox-outdoors",
};
