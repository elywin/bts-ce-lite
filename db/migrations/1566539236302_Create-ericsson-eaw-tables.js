exports.shorthands = undefined;

exports.up = (pgm) => {
    pgm.createTable({schema: "ericsson_cm", name: "DBTSP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "DTDIP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "DTSTP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "EXRPP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "EXSCP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "IOEXP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "MGAAP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "MGCEP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "MGEPP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "MGIDP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "MGLAP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "MGLCP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "MGLNP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "MGNMP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "MGOCP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "MGORP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "MGRIP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "NTCOP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "NTSTP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RAEPP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RFCAP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RFEAP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RFEHP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RFPCP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RFUPP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RFVBP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RFVCP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLACP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLAPP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLBAP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLBCP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLBDP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLBRP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLCAP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLCCP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLCDP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLCFP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLCHP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLCLP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLCPP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLCSP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLCXP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLDAP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLDCP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLDEP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLDGP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLDHP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLDMP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLDRP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLDTP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLDUP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLEFP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLGAP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLGSP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLHPP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLIHP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLIMP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLLAP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLLBP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLLCP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLLDP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLLFP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLLHP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLLLP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLLOP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLLPP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLLSP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLLUP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLMAP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLMFP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLMQP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLMRP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLNMP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLNRP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLOLP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLOMP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLPBP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLPCP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLPSP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLRLP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLRWP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLSBP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLSEP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLSLP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLSMP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLSQP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLSRP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLSSP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
    pgm.createTable({schema: "ericsson_cm", name: "RLSTP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
};

exports.down = (pgm) => {
    pgm.dropTable({schema: "ericsson_cm", name: 'DBTSP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'DTDIP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'DTSTP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'EXRPP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'EXSCP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'IOEXP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'MGAAP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'MGCEP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'MGEPP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'MGIDP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'MGLAP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'MGLCP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'MGLNP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'MGNMP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'MGOCP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'MGORP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'MGRIP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'NTCOP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'NTSTP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RAEPP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RFCAP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RFEAP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RFEHP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RFPCP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RFUPP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RFVBP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RFVCP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLACP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLAPP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLBAP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLBCP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLBDP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLBRP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLCAP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLCCP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLCDP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLCFP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLCHP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLCLP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLCPP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLCSP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLCXP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLDAP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLDCP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLDEP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLDGP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLDHP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLDMP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLDRP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLDTP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLDUP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLEFP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLGAP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLGSP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLHPP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLIHP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLIMP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLLAP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLLBP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLLCP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLLDP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLLFP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLLHP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLLLP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLLOP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLLPP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLLSP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLLUP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLMAP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLMFP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLMQP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLMRP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLNMP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLNRP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLOLP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLOMP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLPBP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLPCP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLPSP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLRLP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLRWP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLSBP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLSEP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLSLP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLSMP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLSQP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLSRP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLSSP'});
    pgm.dropTable({schema: "ericsson_cm", name: 'RLSTP'});
};
