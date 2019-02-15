use strict;
use warnings;
use JSON::PP;

my $json = do {local $/; <STDIN>};
my $bindings = decode_json($json);

my $name = $bindings->{req}{query}{name} || $bindings->{req}{body}{name};

my $res = {
    status => 200,
    headers => {
        'Content-type' => 'application/json',
    },
    body => {
        message => sprintf('%s, Welcome to Perl World!!!!', $name),
        bindings => $bindings
    }
};

print encode_json($res);