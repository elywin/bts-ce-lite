//List of MOs that need to be remapped for import. e.g 
//UCELLSETUP.csv should be imported into huawei_cm.UCELL 
//Read as key should be loade into value
const HUAWEI_MO_MAP = {
	'UCELLSETUP' : 'UCELL',
	'GSMCELL' : 'UEXT2GCELL',
	'GSMNCELL' : 'U2GNCELL',
	'LTECELL' : 'ULTECELL',
	'LTENCELL' : 'ULTENCELL',
	'NRNCCELL' : 'UEXT3GCELL',
	'ACALGO' : 'UACALGO',
	'ADMCTRL' : 'UADMCTRL',
	'AICH' : 'UAICH',
	'AMRC' : 'UAMRC',
	'AMRCWB' : 'UAMRCWB',
	'BCH' : 'UBCH',
	'CACALGOSWITCH' : 'UCACALGOSWITCH',
	'CALLSHOCKCTRL' : 'UCALLSHOCKCTRL',
	'CBSAREA' : 'UCBSAREA',
	'CCP' : 'UCCP',
	'CELLACCESSSTRICT' : 'UCELLACCESSSTRICT',
	'CELLACCESSSTRICT' : 'UCELLACCESSSTRICT',
	'CELLAMRCWB' : 'UCELLAMRCWB',
	'CELLCAC' : 'UCELLCAC',
	'CELLCBSDRX' : 'UCELLCBSDRX',
	'CELLCBSSAC' : 'UCELLCBSSAC',
	'CELLDCCC' : 'UCELLDCCC',
	'CELLDISTANCEREDIRECTION' : 'UCELLDISTANCEREDIRECTION',
	'CELLDRD' : 'UCELLDRD',
	'CELLDYNSHUTDOWN' : 'UCELLDYNSHUTDOWN',
	'CELLFRC' : 'UCELLFRC',
	'CELLHCS' : 'UCELLHCS',
	'CELLHOCOMM' : 'UCELLHOCOMM',
	'CELLHSDPA' : 'UCELLHSDPA',
	'CELLHSDPCCH' : 'UCELLHSDPCCH',
	'CELLHSUPA' : 'UCELLHSUPA',
	'CELLINTERFREQHOCOV' : 'UCELLINTERFREQHOCOV',
	'CELLINTERFREQHONCOV' : 'UCELLINTERFREQHONCOV',
	'CELLINTERRATHOCOV' : 'UCELLINTERRATHOCOV',
	'CELLINTERRATHONCOV' : 'UCELLINTERRATHONCOV',
	'CELLINTRAFREQHO' : 'UCELLINTRAFREQHO',
	'CELLLDB' : 'UCELLLDB',
	'CELLLDM' : 'UCELLLDM',
	'CELLLDR' : 'UCELLLDR',
	'CELLLICENSE' : 'UCELLLICENSE',
	'CELLMBDRINTERFREQ' : 'UCELLMBDRINTERFREQ',
	'CELLMEAS' : 'UCELLMEAS',
	'CELLNFREQPRIOINFO' : 'UCELLNFREQPRIOINFO',
	'CELLOLC' : 'UCELLOLC',
	'CELLPUC' : 'UCELLPUC',
	'CELLREDIRECTION' : 'UCELLREDIRECTION',
	'CELLRLACTTIME' : 'UCELLRLACTTIME',
	'CELLRLPWR' : 'UCELLRLPWR',
	'CELLSELRESEL' : 'UCELLSELRESEL',
	'CELLSIBSWITCH' : 'UCELLSIBSWITCH',
	'CELLU2LTEHONCOV' : 'UCELLU2LTEHONCOV',
	'CELLULB' : 'UCELLULB',
	'CELLURA' : 'UCELLURA',
	'CHPWROFFSET' : 'UCHPWROFFSET',
	'CIDCHG' : 'UCIDCHG',
	'CMCF' : 'UCMCF',
	'CNDOMAIN' : 'UCNDOMAIN',
	'CNNODE' : 'UCNNODE',
	'CNOPERGROUP' : 'UCNOPERGROUP',
	'CNTCHK' : 'UCNTCHK',
	'COIFTIMER' : 'UCOIFTIMER',
	'CONNMODETIMER' : 'UCONNMODETIMER',
	'CORRMALGOSWITCH' : 'UCORRMALGOSWITCH',
	'CORRMPARA' : 'UCORRMPARA',
	'CTRLPLNSHAREPARA' : 'UCTRLPLNSHAREPARA',
	'DCCC' : 'UDCCC',
	'DISTANCEREDIRECTION' : 'UDISTANCEREDIRECTION',
	'DPUCFGDATA' : 'UDPUCFGDATA',
	'DRD' : 'UDRD',
	'DRDMIMO' : 'UDRDMIMO',
	'DSACAUTOALGO' : 'UDSACAUTOALGO',
	'DTXDRXPARA' : 'UDTXDRXPARA',
	'EDCHRATEADJUSTSET' : 'UEDCHRATEADJUSTSET',
	'EDCHTTIRECFG' : 'UEDCHTTIRECFG',
	'FACHBANDWIDTH' : 'UFACHBANDWIDTH',
	'FACHDYNTFS' : 'UFACHDYNTFS',
	'FACH' : 'UFACH',
	'FACHLOCH' : 'UFACHLOCH',
	'FDPCHPARA' : 'UFDPCHPARA',
	'FDPCHRLPWR' : 'UFDPCHRLPWR',
	'FRCCHLTYPEPARA' : 'UFRCCHLTYPEPARA',
	'FRC' : 'UFRC',
	'HCSHO' : 'UHCSHO',
	'HOCOMM' : 'UHOCOMM',
	'HSDPCCH' : 'UHSDPCCH',
	'HSSCCHLESSOPPARA' : 'UHSSCCHLESSOPPARA',
	'IDLEMODETIMER' : 'UIDLEMODETIMER',
	'IMEITAC' : 'UIMEITAC',
	'IMSIIDNNSCNIDMAP' : 'UIMSIIDNNSCNIDMAP',
	'INTERFREQHOCOV' : 'UINTERFREQHOCOV',
	'INTERFREQHONCOV' : 'UINTERFREQHONCOV',
	'INTERFREQNCELL' : 'UINTERFREQNCELL',
	'INTERRATHOCOV' : 'UINTERRATHOCOV',
	'INTERRATHONCOV' : 'UINTERRATHONCOV',
	'INTRAFREQHO' : 'UINTRAFREQHO',
	'INTRAFREQNCELL' : 'UINTRAFREQNCELL',
	'IUTIMERANDNUM' : 'UIUTIMERANDNUM',
	'KPIALMTHD' : 'UKPIALMTHD',
	'LAC' : 'ULAC',
	'LDCALGOPARA' : 'ULDCALGOPARA',
	'LDCPERIOD' : 'ULDCPERIOD',
	'LDM' : 'ULDM',
	'LOCELL' : 'ULOCELL',
	'LTECELL' : 'ULTECELL',
	'LTENCELL' : 'ULTENCELL',
	'MBMSALARMPARA' : 'UMBMSALARMPARA',
	'MBMSFACH' : 'UMBMSFACH',
	'MBMSPERF' : 'UMBMSPERF',
	'MBMSSCCPCH' : 'UMBMSSCCPCH',
	'MBMSSWITCH' : 'UMBMSSWITCH',
	'MCCHPERIODCOEF' : 'UMCCHPERIODCOEF',
	'MCDRD' : 'UMCDRD',
	'MCLDR' : 'UMCLDR',
	'MGWTST' : 'UMGWTST',
	'MSCHFACH' : 'UMSCHFACH',
	'MTCH' : 'UMTCH',
	'NBNODESYNCMONPARA' : 'UNBNODESYNCMONPARA',
	'NCELLDETECTSWITCH' : 'UNCELLDETECTSWITCH',
	'NCP' : 'UNCP',
	'NODEBALGOPARA' : 'UNODEBALGOPARA',
	'NODEBESN' : 'UNODEBESN',
	'NODEB' : 'UNODEB',
	'NODEBIP' : 'UNODEBIP',
	'NODEBLDR' : 'UNODEBLDR',
	'NODEBOLC' : 'UNODEBOLC',
	'NRIGLBCNIDMAP' : 'UNRIGLBCNIDMAP',
	'NRNC' : 'UNRNC',
	'NRNCURA' : 'UNRNCURA',
	'OLPC' : 'UOLPC',
	'OPERATORCFGPARA' : 'UOPERATORCFGPARA',
	'OPERATORSHARINGMODE' : 'UOPERATORSHARINGMODE',
	'PCCPCH' : 'UPCCPCH',
	'PCHDYNTFS' : 'UPCHDYNTFS',
	'PCH' : 'UPCH',
	'PCPICH' : 'UPCPICH',
	'PICH' : 'UPICH',
	'POOLPRIMHOSTPOLICY' : 'UPOOLPRIMHOSTPOLICY',
	'PRACHACTOASCMAP' : 'UPRACHACTOASCMAP',
	'PRACHASC' : 'UPRACHASC',
	'PRACHBASIC' : 'UPRACHBASIC',
	'PRACHSLOTFORMAT' : 'UPRACHSLOTFORMAT',
	'PRACHTFC' : 'UPRACHTFC',
	'PSCH' : 'UPSCH',
	'PSINACTTIMER' : 'UPSINACTTIMER',
	'PTTPARAM' : 'UPTTPARAM',
	'PTTSTATETRANS' : 'UPTTSTATETRANS',
	'QOSACT' : 'UQOSACT',
	'QOSHO' : 'UQOSHO',
	'QUALITYMEAS' : 'UQUALITYMEAS',
	'QUEUEPREEMPT' : 'UQUEUEPREEMPT',
	'RAC' : 'URAC',
	'RACHDYNTFS' : 'URACHDYNTFS',
	'RACH' : 'URACH',
	'RACHMEASUREPARA' : 'URACHMEASUREPARA',
	'REDIRECTION' : 'UREDIRECTION',
	'RNCBASIC' : 'URNCBASIC',
	'RNCCBPARA' : 'URNCCBPARA',
	'RNCCELLSHUTDOWNPARA' : 'URNCCELLSHUTDOWNPARA',
	'RNCMBMSPARA' : 'URNCMBMSPARA',
	'RRCESTCAUSE' : 'URRCESTCAUSE',
	'RRCTRLSWITCH' : 'URRCTRLSWITCH',
	'SAC' : 'USAC',
	'SATLDCPERIOD' : 'USATLDCPERIOD',
	'SATLDM' : 'USATLDM',
	'SCCPCHBASIC' : 'USCCPCHBASIC',
	'SCCPCHTFC' : 'USCCPCHTFC',
	'SCHEDULEPRIOMAP' : 'USCHEDULEPRIOMAP',
	'SMLCCELL' : 'USMLCCELL',
	'SMLC' : 'USMLC',
	'SPG' : 'USPG',
	'SPIWEIGHT' : 'USPIWEIGHT',
	'SRNSR' : 'USRNSR',
	'SSCH' : 'USSCH',
	'STATETIMER' : 'USTATETIMER',
	'THPCLASS' : 'UTHPCLASS',
	'TYPRABBASIC' : 'UTYPRABBASIC',
	'TYPRABDCCCMC' : 'UTYPRABDCCCMC',
	'TYPRABHSPA' : 'UTYPRABHSPA',
	'TYPRABOLPC' : 'UTYPRABOLPC',
	'TYPRABQUALITYMEAS' : 'UTYPRABQUALITYMEAS',
	'TYPRABRLC' : 'UTYPRABRLC',
	'TYPRABSEMISTATICTF' : 'UTYPRABSEMISTATICTF',
	'U2LTEHONCOV' : 'UU2LTEHONCOV',
	'UEA' : 'UUEA',
	'UESTATETRANS' : 'UUESTATETRANS',
	'UESTATETRANSTIMER' : 'UUESTATETRANSTIMER',
	'UIA' : 'UUIA',
	'URA' : 'UURA',
	'USERGBR' : 'UUSERGBR',
	'USERHAPPYBR' : 'UUSERHAPPYBR',
	'USERMBR' : 'UUSERMBR',
	'USERPLNSHAREPARA' : 'UUSERPLNSHAREPARA',
	'VIPIMSI' : 'UVIPIMSI',
	'WPSALGO' : 'UWPSALGO',
}

const ZTE_MO_MAP = {
	//2G
	'GBssFunction' : 'BssFunction',
	'GSiteBaseBandShare' : 'SiteBaseBandShare',
	'GMocnArea' : 'MocnArea',
	'GBssIftaMa' : 'BssIftaMa',
	'GGsmCell' : 'GsmCell',
	'GCellIfta' : 'CellIfta',
	'GHandoverControl' : 'HandoverControl',
	'GScHandoverControl' : 'ScHandoverControl',
	'GPsHandoverControl' : 'PsHandoverControl',
	'GFhHandoverControl' : 'FhHandoverControl',
	'GPsChannelSchedule' : 'PsChannelSchedule',
	'GPowerControl' : 'PowerControl',
	'GHoppingFrequency' : 'HoppingFrequency',
	'GHoppingBaseband' : 'HoppingBaseband',
	'GTrx' : 'Trx',
	'GTs' : 'Ts',
	'GExternalGsmCell' : 'ExternalGsmCell',
	'GExternalUtranCellFDD' : 'ExternalUtranCellFDD',
	'GExternalUtranCellTDDLcr' : 'ExternalUtranCellTDDLcr',
	'GExternalEutranCellFDD' : 'ExternalEutranCellFDD',
	'GExternalEutranCellTDD' : 'ExternalEutranCellTDD',
	'GGsmRelation' : 'GsmRelation',
	'GUtranRelation' : 'UtranRelation',
	'GEutranRelation' : 'EutranRelation',
	'GGsmVpcRelation' : 'GsmVpcRelation',
	'GGsmIntfRelation' : 'GsmIntfRelation',
	'GPriorityResel' : 'PriorityResel',
	'GCellGroup' : 'CellGroup',
	'GBssGLFShare' : 'BssGLFShare',
	'GGLFShareECGI' : 'GLFShareECGI',
	
	//3g
	'UUtranCellFDD' : 'UtranCellFDD',
	'ULogicalCell' : 'LogicalCell',
	'UExternalUtranCellFDD' : 'ExternalUtranCellFDD',
	'UExternalGsmCell' : 'ExternalGsmCell',
	'UExternalENBFunction' : 'ExternalENBFunction',
	'UExternalEUtranCellFDD' : 'ExternalEUtranCellFDD',
	'UExternalEUtranCellTDD' : 'ExternalEUtranCellTDD',
	'UUtranRelation' : 'UtranRelation',
	'UGsmRelation' : 'GsmRelation',
	'UEUtranRelation' : 'EUtranRelation',
	'UImsiSnacFilter' : 'ImsiSnacFilter',
	'UMbms' : 'Mbms',
	'UMbmsSa' : 'MbmsSa',
	'UMbmsFreq' : 'MbmsFreq',

}


const ERICSSON_MO_MAP = {
	'EutranFreqRelation_UtranCell' : 'EutranFreqRelation'
};



exports.HUAWEI_MO_MAP = HUAWEI_MO_MAP;
exports.ZTE_MO_MAP = ZTE_MO_MAP;