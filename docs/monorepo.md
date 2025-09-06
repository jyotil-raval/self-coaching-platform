flowchart TB
subgraph ROOT["self-coaching-platform/ (Root)"]
rootPkg["package.json\n- typescript\n- prettier\n- eslint\n- turbo"]
end

    subgraph BACKEND["backend/"]
        ag["api-gateway/package.json\n- devDependencies: ts-node\n- dependencies: @nestjs/core"]
        auth["auth-service/package.json\n- devDependencies: ts-node\n- dependencies: express"]
        sharedB["shared/package.json\n- dependencies only"]
    end

    subgraph FRONTEND["frontend/"]
        web["web-app/package.json\n- devDependencies: vite\n- dependencies: react, react-dom"]
        admin["admin-dashboard/package.json\n- devDependencies: vite\n- dependencies: react, react-dom"]
        sharedF["shared-ui/package.json\n- dependencies only"]
    end

    ROOT --> BACKEND
    ROOT --> FRONTEND
    BACKEND --> ag
    BACKEND --> auth
    BACKEND --> sharedB
    FRONTEND --> web
    FRONTEND --> admin
    FRONTEND --> sharedF
