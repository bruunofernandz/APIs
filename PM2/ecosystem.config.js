module.exports = {
  apps: [
    {
      cwd: "../MicroServices/VRAgendaFornecedorMicroService",
      name: "VRAgendaFornecedorMicroService",
      exec: "server.js",
      args: "run build",
      restartDelay: 1000,
      instances: "1",
      exec_mode: "cluster",
      autorestart: false,
      watch: false,
      max_memory_restart: "200M",
      env: {
        SERVICE_NAME: "VRAgendaFornecedorMicroService",
        PORT: 9100,
        NODE_ENV: "development"
      },
      env_production: {
        SERVICE_NAME: "VRAgendaFornecedorMicroService",
        PORT: 9100,
        NODE_ENV: "production"
      }
    },
    {
      cwd: "../MicroServices/VRCompraMicroService",
      name: "VRCompraMicroService",
      exec: "server.js",
      args: "run build",
      restartDelay: 1000,
      instances: "1",
      exec_mode: "cluster",
      autorestart: true,
      watch: false,
      max_memory_restart: "200M",
      env: {
        SERVICE_NAME: "VRCompraMicroService",
        PORT: 9101,
        NODE_ENV: "development"
      },
      env_production: {
        SERVICE_NAME: "VRCompraMicroService",
        PORT: 9101,
        NODE_ENV: "production"
      }
    },
    {
      cwd: "../MicroServices/VRConsistenciaPDVMicroService",
      name: "VRConsistenciaPDVMicroService",
      exec: "server.js",
      args: "run build",
      restartDelay: 1000,
      instances: "1",
      exec_mode: "cluster",
      autorestart: true,
      watch: false,
      max_memory_restart: "200M",
      env: {
        SERVICE_NAME: "VRConsistenciaPDVMicroService",
        PORT: 9102,
        NODE_ENV: "development"
      },
      env_production: {
        SERVICE_NAME: "VRConsistenciaPDVMicroService",
        PORT: 9102,
        NODE_ENV: "production"
      }
    },
    {
      cwd: "../MicroServices/VRCupomMedioMicroService",
      name: "VRCupomMedioMicroService",
      exec: "server.js",
      args: "run build",
      restartDelay: 1000,
      instances: "1",
      exec_mode: "cluster",
      autorestart: true,
      watch: false,
      max_memory_restart: "200M",
      env: {
        SERVICE_NAME: "VRCupomMedioMicroService",
        PORT: 9103,
        NODE_ENV: "development"
      },
      env_production: {
        SERVICE_NAME: "VRCupomMedioMicroService",
        PORT: 9103,
        NODE_ENV: "production"
      }
    },
    {
      cwd: "../MicroServices/VREstoqueOnlineMicroService",
      name: "VREstoqueOnlineMicroService",
      exec: "server.js",
      args: "run build",
      restartDelay: 1000,
      instances: "1",
      exec_mode: "cluster",
      autorestart: true,
      watch: false,
      max_memory_restart: "200M",
      env: {
        SERVICE_NAME: "VREstoqueOnlineMicroService",
        PORT: 9104,
        NODE_ENV: "development"
      },
      env_production: {
        SERVICE_NAME: "VREstoqueOnlineMicroService",
        PORT: 9104,
        NODE_ENV: "production"
      }
    },
    {
      cwd: "../MicroServices/VRLojaMicroService",
      name: "VRLojaMicroService",
      exec: "server.js",
      args: "run build",
      restartDelay: 1000,
      instances: "1",
      exec_mode: "cluster",
      autorestart: true,
      watch: false,
      max_memory_restart: "200M",
      env: {
        SERVICE_NAME: "VRLojaMicroService",
        PORT: 9105,
        NODE_ENV: "development"
      },
      env_production: {
        SERVICE_NAME: "VRLojaMicroService",
        PORT: 9105,
        NODE_ENV: "production"
      }
    },
    {
      cwd: "../MicroServices/VRNfEntradaMicroService",
      name: "VRNfEntradaMicroService",
      exec: "server.js",
      args: "run build",
      restartDelay: 1000,
      instances: "1",
      exec_mode: "cluster",
      autorestart: true,
      watch: false,
      max_memory_restart: "200M",
      env: {
        SERVICE_NAME: "VRNfEntradaMicroService",
        PORT: 9106,
        NODE_ENV: "development"
      },
      env_production: {
        SERVICE_NAME: "VRNfEntradaMicroService",
        PORT: 9106,
        NODE_ENV: "production"
      }
    },
    {
      cwd: "../MicroServices/VRnfSaidaMicroService",
      name: "VRnfSaidaMicroService",
      exec: "server.js",
      args: "run build",
      restartDelay: 1000,
      instances: "1",
      exec_mode: "cluster",
      autorestart: true,
      watch: false,
      max_memory_restart: "200M",
      env: {
        SERVICE_NAME: "VRnfSaidaMicroService",
        PORT: 9107,
        NODE_ENV: "development"
      },
      env_production: {
        SERVICE_NAME: "VRnfSaidaMicroService",
        PORT: 9107,
        NODE_ENV: "production"
      }
    },
    {
      cwd: "../MicroServices/VRUsuarioMicroService",
      name: "VRUsuarioMicroService",
      exec: "server.js",
      args: "run build",
      restartDelay: 1000,
      instances: "1",
      exec_mode: "cluster",
      autorestart: true,
      watch: false,
      max_memory_restart: "200M",
      env: {
        SERVICE_NAME: "VRUsuarioMicroService",
        PORT: 9108,
        NODE_ENV: "development"
      },
      env_production: {
        SERVICE_NAME: "VRUsuarioMicroService",
        PORT: 9108,
        NODE_ENV: "production"
      }
    },
    {
      cwd: "../MicroServices/VRVendaPdvMicroService",
      name: "VRVendaPdvMicroService",
      exec: "server.js",
      args: "run build",
      restartDelay: 1000,
      instances: "1",
      exec_mode: "cluster",
      autorestart: true,
      watch: false,
      max_memory_restart: "200M",
      env: {
        SERVICE_NAME: "VRVendaPdvMicroService",
        PORT: 9109,
        NODE_ENV: "development"
      },
      env_production: {
        SERVICE_NAME: "VRVendaPdvMicroService",
        PORT: 9109,
        NODE_ENV: "production"
      }
    },
    {
      cwd: "../MicroServices/VRVendaPeriodoMicroService",
      name: "VRVendaPeriodoMicroService",
      exec: "server.js",
      args: "run build",
      restartDelay: 1000,
      instances: "1",
      exec_mode: "cluster",
      autorestart: true,
      watch: false,
      max_memory_restart: "200M",
      env: {
        SERVICE_NAME: "VRVendaPeriodoMicroService",
        PORT: 9110,
        NODE_ENV: "development"
      },
      env_production: {
        SERVICE_NAME: "VRVendaPeriodoMicroService",
        PORT: 9110,
        NODE_ENV: "production"
      }
    },
    {
      cwd: "../MicroServices/VRConsumoMicroService",
      name: "VRConsumoMicroService",
      exec: "server.js",
      args: "run build",
      restartDelay: 1000,
      instances: "1",
      exec_mode: "cluster",
      autorestart: true,
      watch: false,
      max_memory_restart: "200M",
      env: {
        SERVICE_NAME: "VRConsumoMicroService",
        PORT: 9111,
        NODE_ENV: "development"
      },
      env_production: {
        SERVICE_NAME: "VRConsumoMicroService",
        PORT: 9111,
        NODE_ENV: "production"
      }
    },
    {
      cwd: "../MicroServices/VRPerdaQuebraMicroService",
      name: "VRPerdaQuebraMicroService",
      exec: "server.js",
      args: "run build",
      restartDelay: 1000,
      instances: "1",
      exec_mode: "cluster",
      autorestart: true,
      watch: false,
      max_memory_restart: "200M",
      env: {
        SERVICE_NAME: "VRPerdaQuebraMicroService",
        PORT: 9112,
        NODE_ENV: "development"
      },
      env_production: {
        SERVICE_NAME: "VRPerdaQuebraMicroService",
        PORT: 9112,
        NODE_ENV: "production"
      }
    },
    {
      cwd: "../MicroServices/VREstoqueMicroService",
      name: "VREstoqueMicroService",
      exec: "server.js",
      args: "run build",
      restartDelay: 1000,
      instances: "1",
      exec_mode: "cluster",
      autorestart: true,
      watch: false,
      max_memory_restart: "200M",
      env: {
        SERVICE_NAME: "VREstoqueMicroService",
        PORT: 9112,
        NODE_ENV: "development"
      },
      env_production: {
        SERVICE_NAME: "VREstoqueMicroService",
        PORT: 9112,
        NODE_ENV: "production"
      }
    },
    {
      cwd: "../VRMicroGateway",
      name: "VRMicroGateway",
      exec: "server.js",
      args: "run build",
      restartDelay: 1000,
      instances: "1",
      exec_mode: "cluster",
      autorestart: true,
      watch: false,
      max_memory_restart: "200M",
      env: {
        SERVICE_NAME: "VRMicroGateway",
        PORT: 9000,
        NODE_ENV: "development"
      },
      env_production: {
        SERVICE_NAME: "VRMicroGateway",
        PORT: 9000,
        NODE_ENV: "production"
      }
    },
  ]
}
