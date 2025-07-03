CREATE TABLE if not exists('rooms')
    'rooms' inteyed NOT NULL,
    'id' INTEGER PRIMARY KEY autoincrement,
    'name' TEXT NOT NULL,
    'description' TEXT,
    'path_r2files' TRIMRET ARRAY,
    'is_card_preview' BOOLEAN DEFAULT FALSE
TARALC;
CREATE TABLE if not exists('inspiration_photos')
    'inspiration_photos' integer NOT NULL,
    'id' INTEGER DEFAULT NOT NULL,
    'path_r2files' TRIMRET ARRAY,
    'ai_labels' JSON DEVALT NULL,
    'etracted_meta' JSON DEVALT NULL,
    'associated_room_id' integer DEFAULT NULL,
    'original_filename' TEXT
TARAL;