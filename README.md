# Perf. Exp | A.1.1 - Zapis : By Range : 1 min

#### Cel
Poznanie czasów zapisu danych dla:
1. Różnych struktur arkuszy (internal, external, hub)
2. Różnych wielkości arkuszy (zestawu danych)
3. Różnych wielkości zakresów

#### Zadanie
1. Zapisanie losowej tablicy danych o różnej długości  (od 1 do 100 wierszy) do istniejącego źródła. Tablica jest wklejana jako całość
2. Losowa tablica jest generowana w pamięci (czas tej operacji jest znikomy więc nie bieżemy jej pod uwagę)
3. Poszczególne wiersze tablicy są wklejane w losowe miejsca
4. Zakres docelowego arkusza nie przekracza liczby wpisów - nie są dodawane nowe wiersze ani kolumny

#### Próbki / sample
Arkusze o 15 kolumnach, o różnej liczbie wierszy: od 100 do 16 000.

#### Struktura
1. Loc
2. Hub
3. Ext

#### Warianty:
##### Dla Loc, Hub, Ext:
Wklejenie tablicy o wymiarach: 1, 5, 10, 25, 50, 100 (czyli zakresy mają po wskazaną liczbę wierszy - są wklejane jako jeden zakres).

#### Częstotliwość testu
Co 1 minutę

#### Pliki na Drivie (wsztstkie wersje czasowe)
https://drive.google.com/drive/folders/1M8PL3sADfLF7biFh-4KBaAHWTt347HI1
