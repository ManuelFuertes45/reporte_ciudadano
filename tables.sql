CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    roles VARCHAR(13) CHECK (roles IN ('citizen', 'administrator')) -- 'public_worker' pending roles
);

CREATE TABLE reports_phase1( -- need to be 'accepted', 'denied' status to move to status range (what's happening next)
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    category VARCHAR NOT NULL CHECK (category IN ('road', 'environment resources')), -- number of characters not known yet (need to apply just public services)
    subcategory VARCHAR NOT NULL CHECK (subcategory IN ('maintenance', 'utilities')), -- number of characters not known yet (need to apply just public services
    location INTEGER REFERENCES location(id),
    image_url TEXT,
    created_by INTEGER REFERENCES citizens(id),
    created_date DEFAULT CURRENT_TIMESTAMP,
);

CREATE TABLE reports_phase2 (
    id SERIAL PRIMARY KEY,
    status VARCHAR(15) CHECK (status IN ('open', 'in-progress', 'closed')) DEFAULT 'open',
    assisted_by INTEGER REFERENCES administrators(id),
    assisted_date DEFAULT CURRENT_TIMESTAMP
    -- need to reference the reports phase1 table
);
CREATE TABLE reports_phase3(
    assigned_date DEFAULT CURRENT_TIMESTAMP
    -- need to reference the reports phase2 table
    
);

CREATE TABLE reports_phase4(
    closed_date DEFAULT CURRENT_TIMESTAMP
    -- need to reference the reports phase3 table
);

CREATE TABLE citizens (-- feature: NEED TO BE DEFINED A SUBROUTINE THAT active all the SUSPENDED ACCOUNTS
    id INTEGER PRIMARY KEY REFERENCES users(id),
    -- warnings setup
    warning_count INTEGER DEFAULT 0, -- TODO: NEED TO BE DEFINED LIMIT 3
    suspended VARCHAR(3) CHECK (suspended IN ('yes', 'no')) DEFAULT 'no' -- Suspension warnings/rules will be displayed on home page so that users can get a heads up.    
);

CREATE TABLE citizen_reports(
    citizen INT NOT NULL,
    report INT NOT NULL,
    PRIMARY KEY (citizen, report),
    FOREIGN KEY (citizen) REFERENCES citizens(id),
    FOREIGN KEY (report) REFERENCES reports(id)
);

CREATE TABLE administrators (
    id INTEGER PRIMARY KEY REFERENCES users(id),
    department TEXT DEFAULT 'department-text'
);

CREATE TABLE administrator_reports(
    administrator INT NOT NULL,
    report INT NOT NULL,
    PRIMARY KEY (administrator, report),
    FOREIGN KEY (administrator) REFERENCES administrators(id),
    FOREIGN KEY (report) REFERENCES reports(id)
);

CREATE TABLE location ( -- feature: constrains range of puerto rico area
    id INTEGER PRIMARY KEY,
    latitude DECIMAL (9,6),
    longitud DECIMAL (9,6)
)



