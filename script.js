   
        // Unicode look-alike mappings
        const unicodeMappings = {
            'a': ['а', 'ɑ', 'α', 'ａ'], 'b': ['ь', 'б', 'β', 'ｂ'],
            'c': ['с', 'ϲ', 'ç', 'ｃ'], 'd': ['ԁ', 'ɗ', 'δ', 'ｄ'],
            'e': ['е', 'ε', 'é', 'ｅ'], 'f': ['ƒ', 'φ', 'ḟ', 'ｆ'],
            'g': ['ɡ', 'γ', 'ğ', 'ｇ'], 'h': ['һ', 'η', 'ḧ', 'ｈ'],
            'i': ['і', 'ι', 'í', 'ｉ'], 'j': ['ј', 'ʝ', 'ĵ', 'ｊ'],
            'k': ['к', 'κ', 'ḳ', 'ｋ'], 'l': ['ӏ', 'λ', 'ḷ', 'ｌ'],
            'm': ['м', 'μ', 'ṃ', 'ｍ'], 'n': ['п', 'η', 'ṅ', 'ｎ'],
            'o': ['о', 'ο', 'ö', 'ｏ'], 'p': ['р', 'ρ', 'ṗ', 'ｐ'],
            'q': ['ԛ', 'ϛ', 'ḳ', 'ｑ'], 'r': ['г', 'ρ', 'ŕ', 'ｒ'],
            's': ['ѕ', 'σ', 'ś', 'ｓ'], 't': ['т', 'τ', 'ṫ', 'ｔ'],
            'u': ['υ', 'ų', 'ú', 'ｕ'], 'v': ['ν', 'ѵ', 'ṽ', 'ｖ'],
            'w': ['ԝ', 'ω', 'ẅ', 'ｗ'], 'x': ['х', 'χ', 'ẍ', 'ｘ'],
            'y': ['у', 'ψ', 'ẏ', 'ｙ'], 'z': ['ᴢ', 'ζ', 'ẑ', 'ｚ']
        };

        // Leet speak mappings
        const leetMappings = {
            'a': ['4', '@', '/-\\', '^'], 'b': ['8', '6', '|3', '13'],
            'c': ['(', '[', '<', '{'], 'd': ['|)', '|]', '|}', '|>'],
            'e': ['3', '€', '£', '&'], 'f': ['|=', 'ph', '|#', '7'],
            'g': ['9', '6', '&', 'C-'], 'h': ['|-|', '#', '|-', '}{'],
            'i': ['1', '!', '|', ']['], 'j': ['_|', ']', '¿', '_/'],
            'k': ['|<', '|{', '|X', '|('], 'l': ['1', '|', '|_', '7'],
            'm': ['|V|', '/\\/\\', '|\\/|', 'AA'], 'n': ['|\\|', '/\\/', '|V', '//'],
            'o': ['0', '()', '[]', '<>'], 'p': ['|*', '|>', '|"', '|°'],
            'q': ['0_', '9', '(,)', '0,'], 'r': ['|2', '12', '|?', '|^'],
            's': ['5', '$', 'z', '§'], 't': ['7', '+', '†', '|-'],
            'u': ['|_|', '(_)', '[_]', '|J'], 'v': ['\\/', '|/', '\\|', 'V'],
            'w': ['vv', '\\/\\/', '\\V/', 'UU'], 'x': ['><', '}{', ')(', '%'],
            'y': ['`/', '\\|/', '\\/', '`('], 'z': ['2', '7_', '-/_', '%']
        };

        // Symbol mappings
        const symbolMappings = {
            'a': ['♠', '♦', '♣', '♥'], 'b': ['♪', '♫', '♬', '♭'],
            'c': ['☾', '☽', '☪', '☫'], 'd': ['♠', '♦', '♣', '♥'],
            'e': ['★', '☆', '✦', '✧'], 'f': ['♀', '♂', '⚤', '⚥'],
            'g': ['☀', '☁', '☂', '☃'], 'h': ['♨', '♩', '♪', '♫'],
            'i': ['♤', '♧', '♡', '♢'], 'j': ['☯', '☮', '☢', '☣'],
            'k': ['♔', '♕', '♖', '♗'], 'l': ['♘', '♙', '♚', '♛'],
            'm': ['☺', '☻', '☹', '☃'], 'n': ['♦', '♣', '♠', '♥'],
            'o': ['◯', '○', '●', '◉'], 'p': ['♞', '♟', '♜', '♝'],
            'q': ['♛', '♚', '♞', '♟'], 'r': ['♜', '♝', '♛', '♚'],
            's': ['§', '∫', '∬', '∭'], 't': ['†', '‡', '✝', '✞'],
            'u': ['∪', '∩', '∆', '∇'], 'v': ['∨', '∧', '∀', '∃'],
            'w': ['∬', '∭', '∮', '∯'], 'x': ['×', '✗', '✘', '✖'],
            'y': ['¥', '¢', '£', '€'], 'z': ['ℨ', 'ℤ', '℥', '℆']
        };

        // Fancy Unicode mappings
        const fancyMappings = {
            'a': ['𝔞', '𝖆', '𝒶', '𝓪'], 'b': ['𝔟', '𝖇', '𝒷', '𝓫'],
            'c': ['𝔠', '𝖈', '𝒸', '𝓬'], 'd': ['𝔡', '𝖉', '𝒹', '𝓭'],
            'e': ['𝔢', '𝖊', '𝑒', '𝓮'], 'f': ['𝔣', '𝖋', '𝒻', '𝓯'],
            'g': ['𝔤', '𝖌', '𝑔', '𝓰'], 'h': ['𝔥', '𝖍', '𝒽', '𝓱'],
            'i': ['𝔦', '𝖎', '𝒾', '𝓲'], 'j': ['𝔧', '𝖏', '𝒿', '𝓳'],
            'k': ['𝔨', '𝖐', '𝓀', '𝓴'], 'l': ['𝔩', '𝖑', '𝓁', '𝓵'],
            'm': ['𝔪', '𝖒', '𝓂', '𝓶'], 'n': ['𝔫', '𝖓', '𝓃', '𝓷'],
            'o': ['𝔬', '𝖔', '𝓄', '𝓸'], 'p': ['𝔭', '𝖕', '𝓅', '𝓹'],
            'q': ['𝔮', '𝖖', '𝓆', '𝓺'], 'r': ['𝔯', '𝖗', '𝓇', '𝓻'],
            's': ['𝔰', '𝖘', '𝓈', '𝓼'], 't': ['𝔱', '𝖙', '𝓉', '𝓽'],
            'u': ['𝔲', '𝖚', '𝓊', '𝓾'], 'v': ['𝔳', '𝖛', '𝓋', '𝓿'],
            'w': ['𝔴', '𝖜', '𝓌', '𝔀'], 'x': ['𝔵', '𝖝', '𝓍', '𝔁'],
            'y': ['𝔶', '𝖞', '𝓎', '𝔂'], 'z': ['𝔷', '𝖟', '𝓏', '𝔃']
        };

        function getIntensity() {
            return parseInt(document.getElementById('intensitySlider').value);
        }

        function updateIntensityLabel() {
            const intensity = getIntensity();
            const labels = ['', 'Low', 'Medium', 'High'];
            document.getElementById('intensityValue').textContent = labels[intensity];
        }

        function obfuscateUnicode(text) {
            const intensity = getIntensity();
            return text.toLowerCase().split('').map(char => {
                if (unicodeMappings[char]) {
                    const options = unicodeMappings[char].slice(0, intensity);
                    return options[Math.floor(Math.random() * options.length)];
                }
                return char;
            }).join('');
        }

        function obfuscateLeet(text) {
            const intensity = getIntensity();
            return text.toLowerCase().split('').map(char => {
                if (leetMappings[char]) {
                    const options = leetMappings[char].slice(0, intensity);
                    return options[Math.floor(Math.random() * options.length)];
                }
                return char;
            }).join('');
        }

        function obfuscateSymbol(text) {
            const intensity = getIntensity();
            return text.toLowerCase().split('').map(char => {
                if (symbolMappings[char]) {
                    const options = symbolMappings[char].slice(0, intensity);
                    return options[Math.floor(Math.random() * options.length)];
                }
                return char === ' ' ? ' ' : '◦';
            }).join('');
        }

        function obfuscateFancy(text) {
            const intensity = getIntensity();
            return text.toLowerCase().split('').map(char => {
                if (fancyMappings[char]) {
                    const options = fancyMappings[char].slice(0, intensity);
                    return options[Math.floor(Math.random() * options.length)];
                }
                return char;
            }).join('');
        }

        function obfuscateReverse(text) {
            const words = text.split(' ');
            return words.map(word => {
                const reversed = word.split('').reverse().join('');
                return reversed.split('').map(char => {
                    // Add some random capitalization
                    return Math.random() > 0.5 ? char.toUpperCase() : char.toLowerCase();
                }).join('');
            }).join(' ');
        }

        function obfuscateBinary(text) {
            return text.split('').map(char => {
                const binary = char.charCodeAt(0).toString(2).padStart(8, '0');
                return binary;
            }).join(' ');
        }

        function obfuscateAll() {
            const inputText = document.getElementById('inputText').value;
            
            if (!inputText.trim()) {
                alert('Please enter some text to obfuscate!');
                return;
            }

            document.getElementById('unicodeOutput').innerHTML = 
                '<button class="copy-btn" onclick="copyToClipboard(\'unicodeOutput\')">Copy</button>' +
                obfuscateUnicode(inputText);
            
            document.getElementById('leetOutput').innerHTML = 
                '<button class="copy-btn" onclick="copyToClipboard(\'leetOutput\')">Copy</button>' +
                obfuscateLeet(inputText);
            
            document.getElementById('symbolOutput').innerHTML = 
                '<button class="copy-btn" onclick="copyToClipboard(\'symbolOutput\')">Copy</button>' +
                obfuscateSymbol(inputText);
            
            document.getElementById('fancyOutput').innerHTML = 
                '<button class="copy-btn" onclick="copyToClipboard(\'fancyOutput\')">Copy</button>' +
                obfuscateFancy(inputText);
            
            document.getElementById('reverseOutput').innerHTML = 
                '<button class="copy-btn" onclick="copyToClipboard(\'reverseOutput\')">Copy</button>' +
                obfuscateReverse(inputText);
            
            document.getElementById('binaryOutput').innerHTML = 
                '<button class="copy-btn" onclick="copyToClipboard(\'binaryOutput\')">Copy</button>' +
                obfuscateBinary(inputText);

            updateStats(inputText);
        }

        function clearAll() {
            document.getElementById('inputText').value = '';
            const outputs = ['unicodeOutput', 'leetOutput', 'symbolOutput', 'fancyOutput', 'reverseOutput', 'binaryOutput'];
            outputs.forEach(id => {
                document.getElementById(id).innerHTML = 
                    '<button class="copy-btn" onclick="copyToClipboard(\'' + id + '\')">Copy</button>' +
                    'Your ' + id.replace('Output', '') + ' text will appear here...';
            });
            updateStats('');
        }

        function copyToClipboard(elementId) {
            const element = document.getElementById(elementId);
            const text = element.textContent.replace('Copy', '').trim();
            
            if (text && text !== 'Your ' + elementId.replace('Output', '') + ' text will appear here...') {
                navigator.clipboard.writeText(text).then(() => {
                    const btn = element.querySelector('.copy-btn');
                    const originalText = btn.textContent;
                    btn.textContent = 'Copied!';
                    btn.style.background = 'rgba(0, 255, 0, 0.3)';
                    setTimeout(() => {
                        btn.textContent = originalText;
                        btn.style.background = 'rgba(255, 255, 255, 0.2)';
                    }, 2000);
                });
            }
        }

        function copyAllResults() {
            const results = [];
            const outputs = ['unicodeOutput', 'leetOutput', 'symbolOutput', 'fancyOutput', 'reverseOutput', 'binaryOutput'];
            const labels = ['Unicode Look-alikes', 'Leet Speak', 'Symbol Cipher', 'Fancy Unicode', 'Reverse Cipher', 'Binary Code'];
            
            outputs.forEach((id, index) => {
                const element = document.getElementById(id);
                const text = element.textContent.replace('Copy', '').trim();
                if (text && text !== 'Your ' + id.replace('Output', '') + ' text will appear here...') {
                    results.push(`${labels[index]}: ${text}`);
                }
            });
            
            if (results.length > 0) {
                const allText = results.join('\n\n');
                navigator.clipboard.writeText(allText).then(() => {
                    alert('All results copied to clipboard!');
                });
            } else {
                alert('No results to copy! Please obfuscate some text first.');
            }
        }

        function updateStats(text) {
            const charCount = text.length;
            const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
            const methodCount = text.trim() ? 6 : 0;
            
            document.getElementById('charCount').textContent = charCount;
            document.getElementById('wordCount').textContent = wordCount;
            document.getElementById('methodCount').textContent = methodCount;
        }

        // Event listeners
        document.getElementById('inputText').addEventListener('input', function() {
            updateStats(this.value);
        });

        document.getElementById('intensitySlider').addEventListener('input', updateIntensityLabel);

        // Initialize
        updateIntensityLabel();
        updateStats('');
  