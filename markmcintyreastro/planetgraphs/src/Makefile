CC = gcc
CFLAGS  = -g -Wall
ODIR=objs
SDIR=.
OUT=orbitcalcs

default: $(OUT)

install: orbitcalcs
	install -m 755 orbitcalcs /var/www/html/planetgraphs/

_OBJS = main.o DateMaths.o InitStaticData.o MagAndSize.o OrbitCalcs.o Outputter.o Perturbations.o Pluto.o TransitRiseSet.o Comets.o

OBJS = $(patsubst %,$(ODIR)/%,$(_OBJS))

$(OUT): $(OBJS)
	$(CC) $(CFLAGS) -lm -o $(OUT) $^ -lstdc++

$(ODIR)/%.o: $(SDIR)/%.cpp 
	$(CC) -c $(CFLAGS) -o $@ $< 

clean: 
	rm -f $(OUT) $(ODIR)/*.o *~
